import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

Schema = mongoose.Schema
SALT_WORK = 12

UserSchema = new Schema
  username:
    type: String
    required: true
    unique: true
    index: true
  email:
    type: String
    required: true
    unique: true
    index: true
  password:
    type: String
    required: true
, timestamps: true

UserValidationSchema =
  username:
    isLength:
      options:
        min: 4
        max: 20
    trim: true
    escape: true
  email:
    trim: true
    isEmail: true
    normalizeEmail: true
  password:
    isLength:
      options:
        min: 8

# coffeelint: disable=missing_fat_arrows
UserSchema.methods.comparePassword = (candidate, cb) ->
  return bcrypt.compareSync(candidate, this.password)

UserSchema.pre 'save', (next) ->
  return next() if !this.isModified('password')
  this.password = bcrypt.hashSync(this.password, SALT_WORK)
  next()
# coffeelint: enable

UserModel = mongoose.model('User', UserSchema)

export { UserModel as default, UserValidationSchema }
