import { ProfilePicture, User } from '../models';

export const uploadProfilePic = (req, res) => {
  ProfilePicture.findOneAndUpdate(
    { user: req.user },
    {
      img: req.files.profilePicture.data,
      mimetype: req.files.profilePicture.mimetype,
    },
    {
      upsert: true,
      new: true,
      overwrite: true,
    },
    (err, profilePicture) => {
      if (err) return res.status(500).send('Profile picture upload failed');
      // eslint-disable-next-line no-underscore-dangle
      return res.status(200).send({ id: profilePicture._id });
    },
  );
};

export const getProfilePicBuffer = (req, res) => {
  ProfilePicture.findById(req.params.picId, (err, profilePicture) => {
    if (err) return res.status(500).send('Profile picture retrieval failed');
    if (!profilePicture) return res.status(404).send('Profile picture not found');
    return res.status(200).send(profilePicture.img);
  });
};

export const getProfilePicIdByUsername = (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) return res.status(500).send('Profile picture retrieval failed');
    if (!user) return res.status(404).send('User not found');

    return ProfilePicture.findOne({ user }, (picErr, profilePicture) => {
      if (picErr) return res.status(500).send('Profile picture retrieval failed');
      if (!profilePicture) return res.status(404).send('Profile picture not found');
      // eslint-disable-next-line no-underscore-dangle
      return res.status(200).send({ id: profilePicture._id });
    });
  });
};
