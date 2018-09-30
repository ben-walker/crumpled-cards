export default {
  requester: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Sent', 'Accepted', 'Rejected'],
    required: true,
    default: 'Sent',
  },
};
