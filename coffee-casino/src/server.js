import http from 'http';
import socketIo from 'socket.io';
import mongoAdapter from 'socket.io-adapter-mongo';
import app from './app';

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);

export const io = socketIo(server, {
  serveClient: false,
  adapter: mongoAdapter(process.env.MONGODB_URI),
});

export default server;
