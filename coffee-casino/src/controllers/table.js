import { checkSchema, validationResult } from 'express-validator/check';
import { Table, tableValidation } from '../models/table';

export default [
  checkSchema(tableValidation),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    return Table.create(req.body, (err, table) => {
      if (err) return res.status(500).send('Table creation failure');
      return res.status(200).send(table);
    });
  },
];
