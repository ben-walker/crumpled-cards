import { tableModel, tableValidation } from '../models/table'
import { checkSchema, validationResult } from 'express-validator/check'

export create = [
  checkSchema(tableValidation),
  (req, res, next) ->
    errs = validationResult(req)
    return res.status(422).json(errors: errs.array()) if !errs.isEmpty()

    tableModel.create req.body, (err, table) ->
      return res.status(500).send('Table creation failure') if err
      res.status(200).send(table)
]
