import Table, { tableValidationSchema } from '../models/Table'
import { checkSchema, validationResult } from 'express-validator/check'

export create = [
  checkSchema(tableValidationSchema),
  (req, res, next) ->
    errs = validationResult(req)
    return res.status(422).json(errors: errs.array()) if !errs.isEmpty()

    Table.create req.body, (err, table) ->
      return res.status(500).send('Table creation failure') if err
      res.status(200).send(table)
]
