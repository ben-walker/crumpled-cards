import rateLimit from 'express-rate-limit'

export default new rateLimit
  windowMs: 1 * 60 * 1000
  max: 5
