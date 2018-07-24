import rateLimit from 'express-rate-limit'

export authLimiter = new rateLimit
  windowMs: 1 * 60 * 1000
