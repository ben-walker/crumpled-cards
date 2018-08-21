import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import schema from './schema'
import validation from './validation'

SALT_WORK = 12

userSchema = new mongoose.Schema(schema, timestamps: true)

# coffeelint: disable=missing_fat_arrows
userSchema.methods.comparePassword = (candidate, cb) ->
  return bcrypt.compareSync(candidate, this.password)

userSchema.pre 'save', (next) ->
  return next() if !this.isModified('password')
  this.password = bcrypt.hashSync(this.password, SALT_WORK)
  next()
# coffeelint: enable

userModel = mongoose.model('user', userSchema)

export {
  userModel,
  schema as userSchema,
  validation as userValidation
}
