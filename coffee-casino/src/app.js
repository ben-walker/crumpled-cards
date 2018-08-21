require('dotenv/config')
const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const connectMongo = require('connect-mongo')
const apiRouter = require('./routes/api')
const passport = require('passport')
const passportConfig = require('./config/passport')
const winston = require('./config/winston')
const secure = require('express-force-https')

let app = express()
app.use(secure)

const corsOpts = {
  origin: process.env.ORIGIN,
  credentials: true
}
app.options('*', cors(corsOpts))
app.use(cors(corsOpts))

const mongoStore = connectMongo(session)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const sessionConfig = {
  secret: process.env.SECRET,
  store: new mongoStore({ mongooseConnection: mongoose.Connection }),
  saveUninitialized: false,
  resave: false,
  unset: 'destroy',
  cookie: {}
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
  sessionConfig.cookie.secure = true
}

app.use(session(sessionConfig))

passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(helmet())
app.use(morgan('combined', { stream: winston.stream }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)
app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  const error = req.app.get('env') === 'development'
    ? err
    : {}
  const status = err.status || 500
  const errorMessage = `${status} - ${err.message} -
                        ${req.originalUrl} - ${req.method} - ${req.ip}`
  winston.error(errorMessage)
  res.status(status).send(error)
})

export default app
