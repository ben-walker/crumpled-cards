import express from 'express'
import * as authController from '../controllers/auth'
import * as queryController from '../controllers/query'
import * as meController from '../controllers/me'

router = express.Router()

router.post('/register', authController.register)

router.post('/login', authController.login)

router.post('/logout', authController.logout)

router.get('/me', meController.getUserInfo)

router.get('/usernameRegistered', queryController.usernameRegistered)

router.get('/emailRegistered', queryController.emailRegistered)

export default router
