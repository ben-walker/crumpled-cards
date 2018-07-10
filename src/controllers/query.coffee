import User from '../models/User'

export usernameRegistered = (req, res, next) ->
  username = req.query.username
  User.findByUsername username, (err, user) ->
    return res.status(500).send('Request failed') if err
    if !user then res.status(200).send(false)
    else res.status(200).send(true)

export emailRegistered = (req, res, next) ->
  email = req.query.email
  User.findByEmail email, (err, user) ->
    return res.status(500).send('Request failed') if err
    if !user then res.status(200).send(false)
    else res.status(200).send(true)
