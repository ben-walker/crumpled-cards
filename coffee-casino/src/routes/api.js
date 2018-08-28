import express from 'express';
import * as authController from '../controllers/auth';
import * as queryController from '../controllers/query';
import getUserInfo from '../controllers/me';
import create from '../controllers/table';
import authLimiter from '../config/rate-limit';

const router = express.Router();

router.post('/signUp', authLimiter, authController.signUp);
router.post('/logIn', authLimiter, authController.logIn);
router.post('/logOut', authController.logOut);

router.get('/me', getUserInfo);

router.get('/usernameRegistered', queryController.usernameRegistered);
router.get('/emailRegistered', queryController.emailRegistered);
router.get('/identifierExists', queryController.identifierExists);

router.post('/createTable', create);

router.all('*', (req, res) => res.status(404).end());

export default router;
