import Table from '../models/Table'

export create = (req, res, next) ->
  Table.create req.body, (err, table) ->
    return res.status(500).send('Table creation failure') if err
    res.status(200).send(table)
