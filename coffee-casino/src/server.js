import http from 'http';
import app from './app';
import socketImplementation from './config/socket';
import { normalizePort, onListening, onError } from './server-utils';

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);

server.on('listening', onListening(server));
server.on('error', onError(PORT));

socketImplementation(server);
export default server;
