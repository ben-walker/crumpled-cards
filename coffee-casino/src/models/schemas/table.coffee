import mongoose from 'mongoose'

object = mongoose.Schema.Types.ObjectId

export default tableSchema =
  title:
    type: String
    required: true
  players: [
    type: object,
    ref: 'User'
  ]
