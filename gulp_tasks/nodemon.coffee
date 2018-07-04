module.exports = (gulp, plugins) ->
  return (done) ->
    started = false
    plugins.nodemon({ script: 'dist/server.js' }).on 'start', ->
      if !started
        done()
        started = true
