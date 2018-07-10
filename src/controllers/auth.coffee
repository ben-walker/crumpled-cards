import User from '../models/User'
import passport from 'passport'
import UserValidation from '../models/validation-schemas/user-validation'
import { checkSchema, validationResult } from 'express-validator/check'

export register = [
  checkSchema(UserValidation),
  (req, res, next) ->
    errors = validationResult(req)
    if !errors.isEmpty()
      return res.status(422).json({ errors: errors.array() })

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
