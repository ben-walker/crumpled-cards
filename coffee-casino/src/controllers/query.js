import { user } from '../models'

export const usernameRegistered = (req, res, next) => {
  user.findOne({ 'username': req.query.username }, (err, user) => {
    if (err) res.status(500).send('Request failure')
    else res.status(200).send(!!user)
  })
}

export const emailRegistered = (req, res, next) => {
  user.findOne({ 'email': req.query.email }, (err, user) => {
    if (err) res.status(500).send('Request failure')
    else res.status(200).send(!!user)
  })
}

export const identifierExists = (req, res, next) => {
  const id = req.query.identifier
  user.findOne({
    $or: [
      { username: id },
      { email: id }
    ]
  }, (err, user) => {
    if (err) res.status(500).send('Request failure')
    else res.status(200).send(!!user)
  })
}

export const passwordMatches = (req, res, next) => {
  const id = req.body.identifier
  const password = req.body.password
  user.findOne({
    $or: [
      { username: id },
      { email: id }
    ]
  }, (err, user) => {
    if (err) return res.status(500).send('Request failure')
    if (!user) res.status(200).send(true)
    else res.status(200).send(user.comparePassword(password))
  })
}
