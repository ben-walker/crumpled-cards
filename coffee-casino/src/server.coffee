import app from './app'
import http from 'http'

normalizePort = (val) ->
  port = parseInt(val, 10)
  return val if isNaN(port)
  if port >= 0 then return port else return val

port = normalizePort(process.env.PORT || '3000')
app.set('port', port)
console.log(port)

server = http.createServer(app)
server.listen(port)

export default server
