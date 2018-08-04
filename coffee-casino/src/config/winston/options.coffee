import appRoot from 'app-root-path'

LOG_DIR = 'logs'
FILE_SIZE = 5242880
MAX_FILES = 5

errorOpts =
  level: 'error'
  filename: "#{appRoot}/#{LOG_DIR}/error.log"
  handleExceptions: true
  maxsize: FILE_SIZE
  maxFiles: MAX_FILES

combinedOpts =
  filename: "#{appRoot}/#{LOG_DIR}/combined.log"
  handleExceptions: true
  maxsize: FILE_SIZE
  maxFiles: MAX_FILES

export {
  errorOpts,
  combinedOpts,
  LOG_DIR
}
