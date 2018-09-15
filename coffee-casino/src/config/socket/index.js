import socketIo from 'socket.io';
import mongoAdapter from 'socket.io-adapter-mongo';
import logger from '../debugger';

export default (server) => {
  const io = socketIo(server, {
    serveClient: false,
    adapter: mongoAdapter(process.env.MONGODB_URI),
  });

  io.on('connection', (socket) => {
    logger(`Socket connected: ${socket.id}`);
  });
};
