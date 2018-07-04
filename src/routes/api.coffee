express = require('express')
authController = require('../controllers/auth')

router = express.Router()

router.post '/signup', authController.register

export default router
