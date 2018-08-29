import mongoose from 'mongoose';
import schema from './schema';

const profilePictureSchema = new mongoose.Schema(schema, {
  timestamps: true,
});

const ProfilePicture = mongoose.model('ProfilePicture', profilePictureSchema);

export {
  ProfilePicture,
  schema as profilePictureSchema,
};
