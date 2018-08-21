import mongoose from 'mongoose'
import schema from './schema'
import validation from './validation'

tableSchema = new mongoose.Schema(schema, {
  timestamps: true
})

table = mongoose.model('table', tableSchema)

export {
  table,
  schema as tableSchema,
  validation as tableValidation
}
