import { User, FriendRequest } from '../models';

export const sendRequest = (req, res) => {
  const { user } = req;
  const { username } = req.body;

  User.findOne({ username }, (err, recipient) => {
    if (err) return res.status(500).send('Friend request failed');
    if (!recipient) return res.status(404).send('Recipient not found');

    return FriendRequest.create({
      requester: user,
      recipient,
    }, (createErr) => {
      if (createErr) return res.status(500).send('Friend request failed');
      return res.status(200).send();
    });
  });
};

export const acceptRequest = () => {};
