import passport from 'passport';
import { checkSchema, validationResult } from 'express-validator/check';
import { User, userValidation } from '../models/user';

export const register = [
  checkSchema(userValidation),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    return User.create(req.body, (createErr, user) => {
      if (createErr) return res.status(500).send('User registration failure');
      return req.logIn(user, (err) => {
        if (err) return next(err);
        return res.status(200).send({ authenticated: req.isAuthenticated() });
      });
    });
  },
];

export const logIn = [
  passport.authenticate('local'),
  (req, res) => {
    req.session.save();
    res.status(200).send({ authenticated: req.isAuthenticated() });
  },
];

export const logOut = (req, res) => {
  req.logOut();
  req.session.destroy((err) => {
    if (err) res.status(500).send('Session destruction failure');
    else {
      res
        .status(200)
        .clearCookie('connect.sid', { path: '/' })
        .send({ authenticated: req.isAuthenticated() });
    }
  });
};
