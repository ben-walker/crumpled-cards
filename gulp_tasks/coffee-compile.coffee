module.exports = (gulp, plugins) ->
  return ->
    gulp.src('src/**/*.coffee')
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.coffee({ bare: true }))
      .pipe(plugins.babel({
        presets: ['env']
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest('dist'))
