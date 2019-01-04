import to from 'await-to-js';
import { checkSchema, validationResult } from 'express-validator/check';
import { Table, tableValidation } from '../models/table';

export const create = [
  checkSchema(tableValidation),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).send({ errors: errors.array() });

    const { title } = req.body;
    const createdBy = req.user.username;
    const table = new Table({
      title,
      createdBy,
    });
    const [err, doc] = await to(table.save());
    return err
      ? res.status(500).send('Table creation failure')
      : res.status(200).send(doc);
  },
];

export const retrieve = async (req, res) => {
  const [err, tables] = await to(Table.find({}));
  return err
    ? res.status(500).send('Table retrieval failed')
    : res.status(200).send(tables);
};
