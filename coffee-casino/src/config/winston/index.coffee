import winston from 'winston'
import fs from 'fs'
import { errorOpts, combinedOpts, LOG_DIR } from './options'

fs.mkdirSync(LOG_DIR) if !fs.existsSync(LOG_DIR)

logger = winston.createLogger({
  transports: [
    new winston.transports.File(errorOpts),
    new winston.transports.File(combinedOpts)
  ],
  exitOnError: false
})

logger.stream =
  write: (msg, encoding) ->
    logger.info(msg)

if process.env.NODE_ENV != 'production'
  logger.add new winston.transports.Console format: winston.format.simple()

export default logger
