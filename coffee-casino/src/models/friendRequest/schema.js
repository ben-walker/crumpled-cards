import mongoose from 'mongoose';

const objId = mongoose.Schema.Types.ObjectId;

export default {
  requester: {
    type: objId,
    ref: 'User',
    required: true,
  },
  recipient: {
    type: objId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Sent', 'Accepted', 'Rejected'],
    required: true,
    default: 'Sent',
  },
};
