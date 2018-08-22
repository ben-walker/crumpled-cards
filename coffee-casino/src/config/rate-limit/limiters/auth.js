import RateLimit from 'express-rate-limit';

export default new RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
});
