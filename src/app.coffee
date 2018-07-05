import express from 'express'
import session from 'express-session'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import connectMongo from 'connect-mongo'
import apiRouter from './routes/api'
import dotenv from 'dotenv'

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

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

export default app
