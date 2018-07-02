app = require('./app')
http = require('http')

normalizePort = (val) ->
  port = parseInt(val, 10)
  return val if isNaN(port)
  if port >= 0 then return port else return val

port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

server = http.createServer(app)
server.listen(port)

module.exports = server
