import appRoot from 'app-root-path';

export const LOG_DIR = `${appRoot}/logs`;
const FILE_SIZE = 5242880;
const MAX_FILES = 5;

export const errorOptions = {
  level: 'error',
  filename: `${LOG_DIR}/error.log`,
  handleExceptions: true,
  maxsize: FILE_SIZE,
  maxFiles: MAX_FILES,
};

export const combinedOptions = {
  filename: `${LOG_DIR}/combined.log`,
  handleExceptions: true,
  maxsize: FILE_SIZE,
  maxFiles: MAX_FILES,
};
