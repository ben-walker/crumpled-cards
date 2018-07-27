import local from 'passport-local'
import User from '../../../models/User'

localStrategy = local.Strategy

export default new localStrategy { usernameField: 'identifier' },
  (identifier, password, done) ->
    User.findOne { $or: [{ username: identifier }, { email: identifier }] },
      (err, user) ->
        return done(err) if err
        return done(null, false) if !user
        return done(null, false) if !user.comparePassword(password)
        return done(null, user)
