import express from 'express';
import * as authController from '../controllers/auth';
import * as userController from '../controllers/user';
import authLimiter from '../config/rate-limit';

const router = express.Router();

router.post('/signUp', authLimiter, authController.signUp);
router.post('/logIn', authLimiter, authController.logIn);
router.post('/logOut', authController.logOut);

router.get('/me', userController.getMe);
router.get('/usernameRegistered', userController.usernameRegistered);
router.get('/emailRegistered', userController.emailRegistered);
router.get('/identifierExists', userController.identifierExists);
router.post('/profilePicture', userController.uploadProfilePic);
router.get('/profilePicture', userController.getProfilePic);

router.all('*', (req, res) => res.status(404).end());

export default router;
