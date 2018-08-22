import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import schema from './schema';
import validation from './validation';

const SALT_WORK = 12;

const userSchema = new mongoose.Schema(schema, {
  timestamps: true,
});

/* eslint-disable func-names */
userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compareSync(candidate, this.password);
};

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, SALT_WORK);
  return next();
});
/* eslint-enable */

const user = mongoose.model('user', userSchema);

export {
  user,
  schema as userSchema,
  validation as userValidation,
};
