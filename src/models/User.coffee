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

class UserClass
  comparePassword: (candidate, cb) ->
    return bcrypt.compareSync(candidate, this.password)


userSchema.pre 'save', (next) -> # coffeelint: disable-line=missing_fat_arrows
  return next() if !this.isModified('password')
  this.password = bcrypt.hashSync(this.password, SALT_WORK)
  next()

userSchema.loadClass(UserClass)
export default mongoose.model('User', userSchema)
