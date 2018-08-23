import debug from 'debug';

const logger = debug('debug');

export default (server) => {
  const address = server.address();
  const bind = typeof address === 'string'
    ? `pipe ${address}`
    : `port ${address.port}`;
  logger(`Listening on ${bind}`);
};
