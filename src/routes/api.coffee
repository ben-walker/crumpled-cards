express = require('express')
authController = require('../controllers/auth')

router = express.Router()

router.post '/signup', authController.register

module.exports = router
