import http from 'http';
import socketIo from 'socket.io';
import mongoAdapter from 'socket.io-adapter-mongo';
import app from './app';
import { normalizePort, onListening } from './server-utils';

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);
server.on('listening', onListening(server));

export const io = socketIo(server, {
  serveClient: false,
  adapter: mongoAdapter(process.env.MONGODB_URI),
});

export default server;
