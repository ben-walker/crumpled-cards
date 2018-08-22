import { checkSchema, validationResult } from 'express-validator/check';
import { table, tableValidation } from '../models/table';

export const create = [
  checkSchema(tableValidation),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    table.create(req.body, (err, table) => {
      if (err) return res.status(500).send('Table creation failure');
      res.status(200).send(table);
    });
  },
];
