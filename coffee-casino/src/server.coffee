import app from './app'
import http from 'http'
import socketIo from 'socket.io'
import mongoAdapter from 'socket.io-adapter-mongo'

normalizePort = (val) ->
  port = parseInt(val, 10)
  return val if isNaN(port)
  if port >= 0 then return port else return val

port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

server = http.createServer(app)
server.listen(port)

io = socketIo server,
  serveClient: false
  adapter: mongoAdapter(process.env.MONGODB_URI)

export { server as default, io }
