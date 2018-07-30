import socketIO from 'socket.io'

io = new socketIO 3030,
  serveClient: false

export default io
