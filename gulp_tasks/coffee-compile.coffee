module.exports = (gulp, plugins) ->
  return ->
    gulp.src('src/**/*.coffee', {
      sourcemaps: true
    }).pipe(plugins.coffee({ bare: true }))
      .pipe(gulp.dest('dist'))
