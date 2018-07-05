import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import apiRouter from './routes/api'
import dotenv from 'dotenv'
import env from 'env-var'

dotenv.config()

app = express()

MONGODB_URI = env.get('MONGODB_URI').required().asUrlString()
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

export default app
