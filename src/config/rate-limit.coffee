import rateLimit from 'express-rate-limit'

export authLimiter = new rateLimit
  windowMs: 15 * 60 * 1000
