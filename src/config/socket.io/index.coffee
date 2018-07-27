import socketIO from 'socket.io'
import server from '../../server'

io = new socketIO server,
  serveClient: false

export default io
