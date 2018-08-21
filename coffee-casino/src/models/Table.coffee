import mongoose from 'mongoose'
import tableSchema from './schemas/table'

TableSchema = new mongoose.Schema(tableSchema, timestamps: true)

TableModel = mongoose.model('Table', TableSchema)

export { TableModel as default }
