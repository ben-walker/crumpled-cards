import 'dotenv/config';
import createError from 'http-errors';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import secure from 'express-force-https';
import busboyBodyParser from 'busboy-body-parser';
import apiRouter from './routes/api';
import passportConfig from './config/passport';
import winston from './config/winston';
import store from './config/store';

const app = express();
app.use(secure);
app.use(busboyBodyParser());

const corsOpts = {
  origin: process.env.ORIGINS.split(','),
  credentials: true,
};
app.options('*', cors(corsOpts));
app.use(cors(corsOpts));

const sessionConfig = {
  secret: process.env.SECRET,
  store,
  saveUninitialized: false,
  resave: false,
  unset: 'destroy',
  cookie: {},
};

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  sessionConfig.cookie.secure = true;
}

app.use(session(sessionConfig));

passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  const error = req.app.get('env') === 'development'
    ? err
    : {};
  const status = err.status || 500;
  const errorMessage = `${status} - ${err.message} -
                        ${req.originalUrl} - ${req.method} - ${req.ip}`;
  winston.error(errorMessage);
  res.status(status).send(error);
});

export default app;
