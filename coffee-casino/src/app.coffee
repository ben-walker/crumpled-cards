import 'dotenv/config'
import createError from 'http-errors'
import express from 'express'
import session from 'express-session'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import connectMongo from 'connect-mongo'
import apiRouter from './routes/api'
import passport from 'passport'
import passportConfig from './config/passport'
import winston from './config/winston'

app = express()

corsOpts =
  origin: process.env.ORIGIN
  credentials: true
app.options('*', cors(corsOpts))
app.use(cors(corsOpts))

mongoStore = connectMongo(session)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

sessionConfig =
  secret: process.env.SECRET
  store: new mongoStore(mongooseConnection: mongoose.connection)
  saveUninitialized: false
  resave: false
  unset: 'destroy'
  cookie: {}

if process.env.NODE_ENV == 'production'
  app.set('trust proxy', 1)
  sessionConfig.cookie.secure = true
  sessionConfig.cookie.domain = process.env.DOMAIN

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

app.use (req, res, next) ->
  next(createError(404))

app.use (err, req, res, next) ->
  error = if req.app.get('env') == 'development' then err else {}
  status = err.status || 500
  errorMessage = "#{status} - #{err.message} -
                  #{req.originalUrl} - #{req.method} - #{req.ip}"
  winston.error(errorMessage)
  res.status(status).send(error)

export default app
