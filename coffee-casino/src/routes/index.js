import express from 'express';
import apiRouter from './api';

const router = express.Router();
router.all('*', (req, res) => res.status(404).end());

export {
  router as default,
  apiRouter,
};
