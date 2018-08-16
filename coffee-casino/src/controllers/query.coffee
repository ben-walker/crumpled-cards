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
  console.log(req)
  id = req.query.identifier
  User.findOne $or: [{ username: id }, { email: id }], (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)

export passwordMatches = (req, res, next) ->
  id = req.body.identifier
  password = req.body.password
  User.findOne $or: [{ username: id }, { email: id }], (err, user) ->
    return res.status(500).send('Request failure') if err
    if !user then res.status(200).send(true)
    else res.status(200).send(user.comparePassword(password))
