import { userModel, userValidation } from '../models/user'
import passport from 'passport'
import { checkSchema, validationResult } from 'express-validator/check'

export register = [
  checkSchema(userValidation),
  (req, res, next) ->
    errs = validationResult(req)
    return res.status(422).json(errors: errs.array()) if !errs.isEmpty()

    userModel.create req.body, (err, user) ->
      return res.status(500).send('User registration failure') if err
      req.logIn user, (err) ->
        return next(err) if err
        res.status(200).send(authenticated: req.isAuthenticated())
]

export login = [
  passport.authenticate('local'),
  (req, res, next) ->
    req.session.save()
    res.status(200).send(authenticated: req.isAuthenticated())
]

export logout = (req, res, next) ->
  req.logOut()
  req.session.destroy (err) ->
    if err then res.status(500).send('Session destruction failure')
    else res.
      status(200).
      clearCookie('connect.sid', path: '/').
      send(authenticated: req.isAuthenticated())
