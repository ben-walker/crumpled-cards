import logger from '../config/debugger';

export default (error, port) => {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      logger(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
