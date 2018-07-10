import User from '../models/User'
import UserValidation from '../models/validation-schemas/user-validation'
import passport from 'passport'
import { checkSchema, validationResult } from 'express-validator/check'

export register = [
  checkSchema(UserValidation),
  (req, res, next) ->
    errs = validationResult(req)
    return res.status(422).json({ errors: errs.array() }) if !errs.isEmpty()

    User.create req.body, (err, user) ->
      return res.status(500).send('User registration failed') if err
      req.logIn user, (err) ->
        return next(err) if err
        res.status(200).send({ authenticated: true })
]

export login = [
  passport.authenticate('local'),
  (req, res, next) ->
    req.session.save()
    res.status(200).send({ authenticated: true })
]
