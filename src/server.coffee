import app from './app'
import http from 'http'
import env from 'env-var'

PORT = env.get('PORT')

normalizePort = (val) ->
  port = parseInt(val, 10)
  return val if isNaN(port)
  if port >= 0 then return port else return val

port = normalizePort(PORT || '3000')
app.set('port', port)

server = http.createServer(app)
server.listen(port)

export default server
