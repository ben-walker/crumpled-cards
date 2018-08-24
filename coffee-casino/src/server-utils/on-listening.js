import logger from '../config/debugger';

export default server => () => {
  const address = server.address();
  const bind = typeof address === 'string'
    ? `pipe ${address}`
    : `port ${address.port}`;
  logger(`Listening on ${bind}`);
};
