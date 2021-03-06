import express from 'express';
import * as authController from '../controllers/auth';
import * as userController from '../controllers/user';
import * as friendController from '../controllers/friend';
import * as tableController from '../controllers/table';
import authLimiter from '../config/rate-limit';

const isAuthenticated = (req, res, next) => (
  req.isAuthenticated()
    ? next()
    : res.status(401).send()
);
const router = express.Router();

router.post('/signUp', authLimiter, authController.signUp);
router.post('/logIn', authLimiter, authController.logIn);
router.post('/logOut', authController.logOut);

router.get('/usernameRegistered', userController.usernameRegistered);
router.get('/emailRegistered', userController.emailRegistered);
router.get('/identifierExists', userController.identifierExists);

router.get('/me', isAuthenticated, userController.getMe);
router.get('/users', isAuthenticated, userController.find);
router.post('/profilePicture', isAuthenticated, userController.uploadProfilePic);

router.post('/sendFriendRequest', isAuthenticated, friendController.sendRequest);
router.get('/friendRequestsForUsers', isAuthenticated, friendController.getFriendRequestsForUsers);

router.post('/createTable', isAuthenticated, tableController.create);
router.get('/tables', isAuthenticated, tableController.retrieve);

export default router;
