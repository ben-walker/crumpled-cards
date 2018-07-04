import express from 'express'
import * as authController from '../controllers/auth'

router = express.Router()

router.post '/signup', authController.register

export default router
