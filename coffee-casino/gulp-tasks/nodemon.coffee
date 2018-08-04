module.exports = (gulp, plugins, config) ->
  PATHS = config.paths
  return (done) ->
    started = false
    plugins.nodemon(script: PATHS.node_entry, delay: 2500).on 'start', ->
      if !started
        done()
        started = true
