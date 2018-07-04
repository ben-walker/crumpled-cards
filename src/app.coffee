express = require('express')
path = require('path')
cookieParser = require('cookie-parser')
logger = require('morgan')
helmet = require('helmet')
apiRouter = require('./routes/api')
mongoose = require('mongoose')
require('dotenv').config()

app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

module.exports = app
