import User from '../models/User'
import UserValidation from '../models/validation-schemas/User'
import passport from 'passport'
import { checkSchema, validationResult } from 'express-validator/check'

export register = [
  checkSchema(UserValidation),
  (req, res, next) ->
    errs = validationResult(req)
    return res.status(422).json({ errors: errs.array() }) if !errs.isEmpty()

    User.create req.body, (err, user) ->
      return res.status(500).send('User registration failure') if err
      req.logIn user, (err) ->
        return next(err) if err
        res.status(200).send({ authenticated: req.isAuthenticated() })
]

export login = [
  passport.authenticate('local'),
  (req, res, next) ->
    req.session.save()
    res.status(200).send({ authenticated: req.isAuthenticated() })
]

export logout = (req, res, next) ->
  req.logOut()
  res.status(200).send({ authenticated: req.isAuthenticated() })
