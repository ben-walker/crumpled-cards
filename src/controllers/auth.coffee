import User from '../models/User'
import jwt from 'jsonwebtoken'

export register = (req, res) ->
  User.create req.body, (err, user) ->
    console.log(err)
    return res.status(500).send('User registration failed') if err
    token = genAuthToken(user._id, '1d')
    res.status(200).send({ auth: true, token: token })

export login = (req, res) ->
  id = req.body.identifier
  User.findOne { $or: [{ username: id }, { email: id }] }, (err, user) ->
    return res.status(500).send('Server error') if err
    return res.status(404).send('User not found') if !user
    if !user.comparePassword(req.body.password)
      return res.status(401).send({ auth: false, token: null })

    token = genAuthToken(user._id, '1d')
    res.status(200).send({ auth: true, token: token })

genAuthToken = (identifier, expiry) ->
  return jwt.sign({ id: identifier }, process.env.SECRET, {
    expiresIn: expiry,
    algorithm: process.env.JWT_ALGORITHM
  })
