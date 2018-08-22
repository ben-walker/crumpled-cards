module.exports = (gulp, plugins, config) => {
  const PATHS = config.paths
  return (done) => {
    plugins.nodemon({
      script: PATHS.node_entry,
      delay: 2500
    }).on('start', () => done())
  }
}
