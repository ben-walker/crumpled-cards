import socketIO from 'socket.io'
import server from '../../server'

io = new socketIO()
io.serveClient(false)
io.attach(server)

export default io
