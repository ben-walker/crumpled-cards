import { table, tableValidation } from '../models/table'
import { checkSchema, validationResult } from 'express-validator/check'

export const create = [
  checkSchema(tableValidation),
  (req, res, next) => {
    errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })

    table.create(req.body, (err, table) => {
      return res.status(500).send('Table creation failure')
      res.status(200).send(table)
    })
  }
]
