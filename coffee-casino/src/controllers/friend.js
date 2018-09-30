import to from 'await-to-js';
import { User, FriendRequest } from '../models';

export const sendRequest = async (req, res) => {
  const { user } = req;
  const { username } = req.body;

  FriendRequest.findOneAndDelete({ requester: user.username, recipient: username }).exec();

  const [err, recipient] = await to(User.findOne({ username }).exec());
  if (err) return res.status(500).send('Friend request failed');
  if (!recipient) return res.status(404).send('Recipient not found');

  const friendRequest = new FriendRequest({
    requester: user.username,
    recipient: recipient.username,
  });
  const [createErr, doc] = await to(friendRequest.save());
  if (createErr) return res.status(500).send('Friend request failed');
  return res.status(200).send(doc);
};

export const acceptRequest = () => {};
