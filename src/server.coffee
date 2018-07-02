app = require('./app')
http = require('http')

port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

server = http.createServer(app)
server.listen(port)

normalizePort = (val) ->
  port = parseInt(val, 10)
  return val if isNan(port)
  if port >= 0 then return port else return val

export default server
