import express from 'express'
import * as authController from '../controllers/auth'
import * as queryController from '../controllers/query'
import * as meController from '../controllers/me'
import { authLimiter } from '../config/rate-limit'

router = express.Router()

router.post('/register', authLimiter, authController.register)

router.post('/login', authLimiter, authController.login)

router.post('/logout', authController.logout)

router.get('/me', meController.getUserInfo)

router.get('/usernameRegistered', queryController.usernameRegistered)

router.get('/emailRegistered', queryController.emailRegistered)

router.get('/identifierExists', queryController.identifierExists)

router.post('/passwordMatches', authLimiter, queryController.passwordMatches)

export default router
