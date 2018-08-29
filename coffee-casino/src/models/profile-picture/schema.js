import mongoose from 'mongoose';

const objId = mongoose.Schema.Types.ObjectId;

export default {
  data: {
    type: Buffer,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  user: {
    type: [objId],
    ref: 'User',
  },
};
