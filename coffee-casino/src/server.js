import app from './app'
import http from 'http'
import socketIo from 'socket.io'
import mongoAdapter from 'socket.io-adapter-mongo'

function normalizePort(val) {
  const port = parseInt(val, 10)
  return isNaN(port)
    ? val
    : port >= 0
      ? port
      : val
}

const PORT = normalizePort(process.env.PORT || '3000')
app.set('port', port)

let server = http.createServer(app)
server.listen(PORT)

export const io = socketIo(server, {
  serveClient: false,
  adapter: mongoAdapter(process.env.MONGODB_URI)
})

export default server
