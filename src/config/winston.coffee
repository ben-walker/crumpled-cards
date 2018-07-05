import winston from 'winston'

logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

if process.env.NODE_ENV != 'production'
  logger.add new winston.transports.Console({
    format: winston.format.simple()
  })

export default logger
