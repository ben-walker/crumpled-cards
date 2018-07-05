module.exports = (gulp, plugins, config) ->
  PATHS = config.paths
  return ->
    gulp.src(PATHS.build_dir, {
      read: false,
      allowEmpty: true
    }).pipe(plugins.clean())
