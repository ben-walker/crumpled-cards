import express from 'express'
import session from 'express-session'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import connectMongo from 'connect-mongo'
import apiRouter from './routes/api'
import dotenv from 'dotenv'
import passport from 'passport'
import passportConfig from './config/passport'

dotenv.config()

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

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

export default app
