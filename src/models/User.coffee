import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

SALT_FACTOR = 12

Schema = mongoose.Schema

userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

userSchema.pre 'save', (next) -> # coffeelint: disable-line=missing_fat_arrows
  return next() if !this.isModified('password')
  this.password = bcrypt.hashSync(this.password, SALT_FACTOR)
  next()

export default mongoose.model('User', userSchema)
