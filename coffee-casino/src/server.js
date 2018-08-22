const app = require('./app')
const http = require('http')
const socketIo = require('socket.io')
const mongoAdapter = require('socket.io-adapter-mongo')

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

exports.io = socketIo(server, {
  serveClient: false,
  adapter: mongoAdapter(process.env.MONGODB_URI)
})

exports = server
