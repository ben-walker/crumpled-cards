import to from 'await-to-js';
import { User, ProfilePicture } from '../models';

export const getMe = (req, res) => {
  const { user } = req;
  user.populate('profilePicture', (err, populatedUser) => {
    if (err) return res.status(500).send('Request failure');
    return res.status(200).send({ user: populatedUser });
  });
};

export const usernameRegistered = async (req, res) => {
  const { username } = req.query;
  const [err, user] = await to(User.findOne({ username }));
  if (err) return res.status(500).send('Request failure');
  return res.status(200).send(!!user);
};

export const emailRegistered = async (req, res) => {
  const { email } = req.query;
  const [err, user] = await to(User.findOne({ email }));
  if (err) return res.status(500).send('Request failure');
  return res.status(200).send(!!user);
};

export const identifierExists = async (req, res) => {
  const { identifier } = req.query;
  const [err, user] = await to(User.findOne({
    $or: [
      { username: identifier },
      { email: identifier },
    ],
  }));
  if (err) return res.status(500).send('Request failure');
  return res.status(200).send(!!user);
};

export const uploadProfilePic = async (req, res) => {
  const { user, files } = req;
  ProfilePicture.findByIdAndRemove(user.profilePicture).exec();

  const profilePicture = new ProfilePicture({
    img: files.profilePicture.data,
    mimetype: files.profilePicture.mimetype,
  });
  const [err, doc] = await to(profilePicture.save());
  if (err) return res.status(500).send('Profile picture upload failed');
  user.profilePicture = doc;

  const [saveErr] = await to(user.save());
  if (saveErr) return res.status(500).send('Profile picture upload failed');
  return res.status(200).send();
};

export const find = async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(200).send([]);

  const [err, users] = await to(User
    .find({
      $and: [
        { username: new RegExp(username, 'i') }, // username contains query string
        { username: { $ne: req.user.username } }, // username not equal to current user
      ],
    })
    .populate('profilePicture'));
  if (err) return res.status(500).send('User search failed');
  return res.status(200).send(users);
};
