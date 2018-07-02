gulp = require('gulp')
plugins = require('gulp-load-plugins')()

gulp.task 'coffee-compile', ->
  gulp.src('./src/**/*.coffee', { sourcemaps: true })
    .pipe(plugins.coffee())
    .pipe(gulp.dest('./dist/src'))
