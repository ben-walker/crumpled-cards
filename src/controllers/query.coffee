import User from '../models/User'

export usernameRegistered = (req, res, next) ->
  findUser 'username', req.query.username, (err, result) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(result)

export emailRegistered = (req, res, next) ->
  findUser 'email', req.query.email, (err, result) ->
    if err then res.status(500).send('Request failure')
    else res.status(200).send(result)

findUser = (property, searchValue, cb) ->
  User.findByKeyValue property, searchValue, (err, user) ->
    return cb(err) if err
    return cb(null, { userFound: !!user })
