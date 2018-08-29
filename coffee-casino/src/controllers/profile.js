import { ProfilePicture } from '../models/profile-picture';

export default (req, res) => {
  ProfilePicture.findOneAndUpdate(
    { user: req.user },
    {
      data: req.files.profilePicture.data,
      mimetype: req.files.profilePicture.mimetype,
    },
    {
      upsert: true,
      new: true,
    },
    (err, profilePicture) => {
      if (err) return res.status(500).send('Profile picture upload failed');
      return res.status(200).send(profilePicture);
    },
  );
};
