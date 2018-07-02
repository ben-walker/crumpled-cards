express = require('express')
path = require('path')
cookieParser = require('cookie-parser')
logger = require('morgan')
router = require('./routes/router')

app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

module.exports = app
