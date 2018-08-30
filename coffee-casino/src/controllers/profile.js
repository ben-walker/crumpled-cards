import { ProfilePicture } from '../models/profile-picture';

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
    },
    (err, profilePicture) => {
      if (err) return res.status(500).send('Profile picture upload failed');
      return res.status(200).send({ profilePicture });
    },
  );
};

export const getProfilePic = (req, res) => {
  ProfilePicture.findOne({ user: req.params.userId }, (err, profilePicture) => {
    if (err) return res.status(500).send('Profile picture retrieval failed');
    if (!profilePicture) return res.status(404).send('Profile picture not found');
    return res.status(200).send(profilePicture.img);
  });
};
