import mongoose from 'mongoose';

const objId = mongoose.Schema.Types.ObjectId;

export default {
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  players: [{
    type: objId,
    ref: 'User',
  }],
};
