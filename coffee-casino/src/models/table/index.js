import mongoose from 'mongoose';
import schema from './schema';
import validation from './validation';

const tableSchema = new mongoose.Schema(schema, {
  timestamps: true,
});

const table = mongoose.model('table', tableSchema);

export {
  table,
  schema as tableSchema,
  validation as tableValidation,
};
