module.exports = (gulp, plugins) ->
  return ->
    gulp.src('src/**/*.coffee')
      .pipe(plugins.coffeelint())
      .pipe(plugins.coffeelint.reporter())
