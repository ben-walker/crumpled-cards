module.exports = (gulp, plugins, config) ->
  PATHS = config.paths
  return (done) ->
    started = false
    plugins.nodemon({ script: PATHS.node_entry }).on 'start', ->
      if !started
        done()
        started = true
