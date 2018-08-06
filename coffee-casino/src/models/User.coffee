import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import userSchema from './schemas/user'
import userValidationSchema from './validations/user'

SALT_WORK = 12

UserSchema = new mongoose.Schema(userSchema, timestamps: true)

# coffeelint: disable=missing_fat_arrows
UserSchema.methods.comparePassword = (candidate, cb) ->
  return bcrypt.compareSync(candidate, this.password)

UserSchema.pre 'save', (next) ->
  return next() if !this.isModified('password')
  this.password = bcrypt.hashSync(this.password, SALT_WORK)
  next()
# coffeelint: enable

UserModel = mongoose.model('User', UserSchema)

export { UserModel as default, userValidationSchema }
