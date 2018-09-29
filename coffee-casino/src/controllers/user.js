import { User, ProfilePicture } from '../models';

export const getMe = (req, res) => {
  const { user } = req;
  user.populate('profilePicture', (err, populatedUser) => {
    if (err) return res.status(500).send('Request failure');
    return res.status(200).send({ user: populatedUser });
  });
};

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

export const uploadProfilePic = (req, res) => {
  const { user, files } = req;

  ProfilePicture.findByIdAndRemove(user.profilePicture).exec();

  return ProfilePicture.create({
    img: files.profilePicture.data,
    mimetype: files.profilePicture.mimetype,
  }, (err, profilePicture) => {
    if (err) return res.status(500).send('Profile picture upload failed');
    user.profilePicture = profilePicture;
    return user.save((saveErr) => {
      if (saveErr) return res.status(500).send('Profile picture upload failed');
      return res.status(200).send();
    });
  });
};

export const find = (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(200).send([]);

  return User
    .find({
      $and: [
        { username: new RegExp(username, 'i') }, // username contains query string
        { username: { $ne: req.user.username } }, // username not equal to current user
      ],
    })
    .populate('profilePicture')
    .exec((err, users) => {
      if (err) return res.status(500).send('User search failed');
      return res.status(200).send(users);
    });
};
