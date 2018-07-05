import express from 'express'
import * as authController from '../controllers/auth'

router = express.Router()

router.post('/signup', authController.register)

router.post('/login', authController.login)

export default router
