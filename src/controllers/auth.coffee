import User from '../models/User'
import passport from 'passport'

export register = (req, res, next) ->
  User.create req.body, (err, user) ->
    return res.status(500).send('User registration failed') if err
    req.logIn user, (err) -> return next(err) if err
    res.status(200).send({ authenticated: true })

export login = [
  passport.authenticate('local'),
  (req, res, next) -> req.session.save()
]
