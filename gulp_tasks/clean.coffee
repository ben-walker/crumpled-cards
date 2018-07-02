module.exports = (gulp, plugins) ->
  return ->
    gulp.src('dist', {
      read: false,
      allowEmpty: true
    }).pipe(plugins.clean())
