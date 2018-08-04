import localStrategy from './strategies/local'

export default (passport) ->

  passport.serializeUser (user, done) ->
    done(null, user.id)

  passport.deserializeUser (id, done) ->
    User.findById id, '-password', (err, user) ->
      done(err, user)

  passport.use localStrategy
