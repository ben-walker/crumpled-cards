import { User } from '../models';

export const usernameRegistered = (req, res) => {
  User.findOne({ username: req.query.username }, (err, user) => {
    if (err) res.status(500).send('Request failure');
    else res.status(200).send(!!user);
  });
};

export const emailRegistered = (req, res) => {
  User.findOne({ email: req.query.email }, (err, user) => {
    if (err) res.status(500).send('Request failure');
    else res.status(200).send(!!user);
  });
};

export const identifierExists = (req, res) => {
  const id = req.query.identifier;
  User.findOne({
    $or: [
      { username: id },
      { email: id },
    ],
  }, (err, user) => {
    if (err) res.status(500).send('Request failure');
    else res.status(200).send(!!user);
  });
};

export const passwordMatches = (req, res) => {
  const { identifier, password } = req.body;
  User.findOne({
    $or: [
      { username: identifier },
      { email: identifier },
    ],
  }, (err, user) => {
    if (err) return res.status(500).send('Request failure');
    if (!user) return res.status(200).send(true);
    return res.status(200).send(user.comparePassword(password));
  });
};
