import winston from 'winston'
import appRoot from 'app-root-path'
import fs from 'fs'

FILE_SIZE = 5242880
MAX_FILES = 5
LOG_DIR = 'logs'

fs.mkdirSync(LOG_DIR) if !fs.existsSync(LOG_DIR)

options =
  errorFile:
    level: 'error'
    filename: "#{appRoot}/#{LOG_DIR}/error.log"
    handleExceptions: true
    maxsize: FILE_SIZE
    maxFiles: MAX_FILES
  combinedFile:
    filename: "#{appRoot}/#{LOG_DIR}/combined.log"
    handleExceptions: true
    maxsize: FILE_SIZE
    maxFiles: MAX_FILES

logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.errorFile),
    new winston.transports.File(options.combinedFile)
  ],
  exitOnError: false
})

logger.stream = {
  write: (msg, encoding) ->
    logger.info(msg)
}

if process.env.NODE_ENV != 'production'
  logger.add new winston.transports.Console({
    format: winston.format.simple()
  })

export default logger
