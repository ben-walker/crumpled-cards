express = require('express')
session = require('express-session')
path = require('path')
cookieParser = require('cookie-parser')
logger = require('morgan')
helmet = require('helmet')
router = require('./routes/router')
dotenv = require('dotenv')
mongoose = require('mongoose')
mongoStore = require('connect-mongo')(session)

app = express()

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new mongoStore({ mongooseConnection: mongoose.connection }),
  saveUninitialized: false,
  resave: false
}))

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

module.exports = app
