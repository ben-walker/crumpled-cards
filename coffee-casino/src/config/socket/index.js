import socketIo from 'socket.io';
import mongoAdapter from 'socket.io-adapter-mongo';
import passportSocketIo from 'passport.socketio';
import cookieParser from 'cookie-parser';
import logger from '../debugger';
import store from '../store';

export default (server) => {
  const io = socketIo(server, {
    serveClient: false,
    adapter: mongoAdapter(process.env.MONGODB_URI),
  });

  io.origins(process.env.ORIGINS.split(','));

  io.use(passportSocketIo.authorize({
    cookieParser,
    secret: process.env.SECRET,
    store,
  }));

  io.on('connection', (socket) => {
    logger(`User connected: ${socket.request.user.username}`);
  });
};
