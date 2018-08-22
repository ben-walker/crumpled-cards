import winston from 'winston';
import fs from 'fs';
import { LOG_DIR, combinedOptions, errorOptions } from './options';

if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR);

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(errorOptions),
    new winston.transports.File(combinedOptions),
  ],
  exitOnError: false,
});

logger.stream = {
  write: (msg) => {
    logger.info(msg);
  },
};

const consoleTransport = new winston.transports.Console({
  format: winston.format.simple(),
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(consoleTransport);
}

export default logger;
