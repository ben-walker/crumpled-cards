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
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: objId,
    ref: 'ProfilePicture',
    default: null,
  },
};
