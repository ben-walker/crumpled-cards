import socketIO from 'socket.io'
import mongoAdapter from 'socket.io-adapter-mongo'

io = new socketIO 3030,
  serveClient: false
  adapter: mongoAdapter(process.env.MONGODB_URI)

export default io
