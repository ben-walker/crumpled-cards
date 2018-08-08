import User from '../models/User'

export usernameRegistered = (req, res, next) ->
  User.findOne 'username': req.query.username, (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)

export emailRegistered = (req, res, next) ->
  User.findOne 'email': req.query.email, (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)

export identifierExists = (req, res, next) ->
  id = req.query.identifier
  User.findOne $or: [{ username: id }, { email: id }], (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)
