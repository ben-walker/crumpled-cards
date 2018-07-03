express = require('express')
path = require('path')
cookieParser = require('cookie-parser')
logger = require('morgan')
helmet = require('helmet')
router = require('./routes/router')
dotenv = require('dotenv')
mongoose = require('mongoose')

app = express()

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

module.exports = app
