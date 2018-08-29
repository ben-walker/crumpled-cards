import mongoose from 'mongoose';
import schema from './schema';

const profilePictureSchema = new mongoose.Schema(schema, {
  timestamps: true,
});

/* eslint-disable func-names */
profilePictureSchema.statics.findByUser = function (user, cb) {
  return this.findOne({ user }, cb);
};
/* eslint-enable */

const ProfilePicture = mongoose.model('ProfilePicture', profilePictureSchema);

export {
  ProfilePicture,
  schema as profilePictureSchema,
};
