import mongoose from 'mongoose';
import schema from './schema';

const friendRequestSchema = new mongoose.Schema(schema, {
  timestamps: true,
});

const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

export {
  FriendRequest,
  schema as friendRequestSchema,
};
