import local from 'passport-local'
import User from '../models/User'

strategy = local.Strategy

export default (passport) ->

  passport.serializeUser (user, done) ->
    done(null, user.id)

  passport.deserializeUser (id, done) ->
    User.findById id, (err, user) ->
      done(err, user)

  passport.use new strategy((username, password, done) ->
    User.findOne { username: username }, (err, user) ->
      return done(err) if err
      return done(null, false) if !user
      return done(null, false) if !user.comparePassword(password)
      return done(null, user)
  )
