import mongoose from 'mongoose';

const objId = mongoose.Schema.Types.ObjectId;

export default {
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: {
    type: [objId],
    ref: 'User',
  },
};
