import rateLimit from 'express-rate-limit'

# TODO: use mongo instead of default store for rate limiters
export default new rateLimit
  windowMs: 1 * 60 * 1000
