import mongoose from 'mongoose'
import schema from './schema'
import validation from './validation'

tableSchema = new mongoose.Schema(schema, timestamps: true)
tableModel = mongoose.model('table', tableSchema)

export {
  tableModel,
  schema as tableSchema,
  validation as tableValidation
}
