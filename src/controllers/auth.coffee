import User from '../models/user'
import jwt from 'jsonwebtoken'

export register = (req, res) ->
  User.create req.body, (err, user) ->
    return res.status(500).send('User registration failed') if err
    token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: '1d',
      algorithm: 'HS512'
    })
    res.status(200).send(token)
