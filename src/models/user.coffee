mongoose = require('mongoose')

schema = mongoose.schema

userSchema = new schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('user', userSchema)
