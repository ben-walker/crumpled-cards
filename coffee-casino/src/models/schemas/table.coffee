import mongoose from 'mongoose'

export default tableSchema =
  title:
    type: String
    required: true
  players: [
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  ]
