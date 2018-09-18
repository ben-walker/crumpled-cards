import { User, ProfilePicture } from '../models';

export const getMe = (req, res) => {
  if (req.isAuthenticated()) res.status(200).send({ user: req.user });
  else res.status(404).send({ user: null });
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
  if (!req.isAuthenticated()) return res.status(401).send();
  const { user, files } = req;

  ProfilePicture.findByIdAndRemove(user.profilePicture);

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

const findProfilePicByUsername = (req, res) => {
  const { username } = req.query;
  User.findProfilePic(username, (err, pic) => {
    if (err) return res.status(500).send('Profile picture retrieval failed');
    return ProfilePicture.findById(pic.profilePicture, (picErr, profilePicture) => {
      if (picErr) return res.status(500).send('Profile picture retrieval failed');
      if (!profilePicture) return res.status(404).send('Profile picture not found');
      return res.status(200).send(profilePicture.img);
    });
  });
};

export const getProfilePic = (req, res) => {
  if (req.query.username) return findProfilePicByUsername(req, res);
  const { user } = req;

  return ProfilePicture.findById(user.profilePicture, (err, profilePicture) => {
    if (err) return res.status(500).send('Profile picture retrieval failed');
    if (!profilePicture) return res.status(404).send('Profile picture not found');
    return res.status(200).send(profilePicture.img);
  });
};
