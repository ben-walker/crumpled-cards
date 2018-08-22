import passport from 'passport';
import { checkSchema, validationResult } from 'express-validator/check';
import { user, userValidation } from '../models/user';

export const register = [
  checkSchema(userValidation),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    user.create(req.body, (err, user) => {
      if (err) return res.status(500).send('User registration failure');
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.status(200).send({ authenticated: req.isAuthenticated() });
      });
    });
  },
];

export const login = [
  passport.authenticate('local'),
  (req, res, next) => {
    req.session.save();
    res.status(200).send({ authenticated: req.isAuthenticated() });
  },
];

export const logout = (req, res, next) => {
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
