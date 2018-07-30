import dotenv from 'dotenv'
dotenv.config()
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
import io from './config/socket.io'

app = express()

mongoStore = connectMongo(session)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

app.use(session({
  secret: process.env.SECRET,
  store: new mongoStore({ mongooseConnection: mongoose.connection }),
  saveUninitialized: false,
  resave: false
}))

passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

corsOpts =
  origin: process.env.ORIGIN
  credentials: true
app.use(cors(corsOpts))

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
