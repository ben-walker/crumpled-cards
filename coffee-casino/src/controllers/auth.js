import passport from 'passport';
import to from 'await-to-js';
import { checkSchema, validationResult } from 'express-validator/check';
import { User, userValidation } from '../models/user';

export const signUp = [
  checkSchema(userValidation),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).send({ errors: errors.array() });

    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password,
    });
    const [err, doc] = await to(user.save());
    if (err) return res.status(500).send('User signup failure');

    return req.logIn(doc, (logInErr) => {
      if (logInErr) return res.status(500).send('User signup failure');
      return res.status(200).send({ authenticated: req.isAuthenticated() });
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
    if (err) return res.status(500).send('Session destruction failure');
    return res
      .status(200)
      .clearCookie('connect.sid', { path: '/' })
      .send({ authenticated: req.isAuthenticated() });
  });
};
