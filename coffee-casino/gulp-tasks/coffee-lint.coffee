module.exports = (gulp, plugins, config) ->
  GLOBS = config.globs
  return ->
    gulp.src(GLOBS.src_coffee)
      .pipe(plugins.coffeelint())
      .pipe(plugins.coffeelint.reporter())
