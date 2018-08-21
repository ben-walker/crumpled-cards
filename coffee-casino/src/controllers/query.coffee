import { userModel } from '../models'

export usernameRegistered = (req, res, next) ->
  userModel.findOne 'username': req.query.username, (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)

export emailRegistered = (req, res, next) ->
  userModel.findOne 'email': req.query.email, (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)

export identifierExists = (req, res, next) ->
  id = req.query.identifier
  userModel.findOne $or: [{ username: id }, { email: id }], (err, user) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(!!user)

export passwordMatches = (req, res, next) ->
  id = req.body.identifier
  password = req.body.password
  userModel.findOne $or: [{ username: id }, { email: id }], (err, user) ->
    return res.status(500).send('Request failure') if err
    if !user then res.status(200).send(true)
    else res.status(200).send(user.comparePassword(password))
