module.exports = (gulp, plugins) ->
  return (done) ->
    gulp.watch('src/**/*.coffee', gulp.series('DIST_COFFEE'))
    done()
