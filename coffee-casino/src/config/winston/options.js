import appRoot from 'app-root-path';

export const LOG_DIR = 'logs';
const FILE_SIZE = 5242880;
const MAX_FILES = 5;

export const errorOptions = {
  level: 'error',
  filename: `${appRoot}/${LOG_DIR}/error.log`,
  handleExceptions: true,
  maxsize: FILE_SIZE,
  maxFiles: MAX_FILES,
};

export const combinedOptions = {
  filename: `${appRoot}/${LOG_DIR}/combined.log`,
  handleExceptions: true,
  maxsize: FILE_SIZE,
  maxFiles: MAX_FILES,
};
