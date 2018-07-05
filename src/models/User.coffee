import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

Schema = mongoose.Schema
SALT_WORK = 12

userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

# coffeelint: disable=missing_fat_arrows
userSchema.methods.comparePassword = (candidate, cb) ->
  return bcrypt.compareSync(candidate, this.password)

userSchema.pre 'save', (next) ->
  return next() if !this.isModified('password')
  this.password = bcrypt.hashSync(this.password, SALT_WORK)
  next()
# coffeelint: enable

export default mongoose.model('User', userSchema)
