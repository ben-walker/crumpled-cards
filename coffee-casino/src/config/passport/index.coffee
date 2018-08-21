import localStrategy from './strategies/local'
import { userModel } from '../../../models'

export default (passport) ->

  passport.serializeUser (user, done) ->
    done(null, user.id)

  passport.deserializeUser (id, done) ->
    userModel.findById id, '-password', (err, user) ->
      done(err, user)

  passport.use localStrategy
