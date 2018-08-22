import mongoose from 'mongoose';
import schema from './schema';
import validation from './validation';

const tableSchema = new mongoose.Schema(schema, {
  timestamps: true,
});

const Table = mongoose.model('Table', tableSchema);

export {
  Table,
  schema as tableSchema,
  validation as tableValidation,
};
