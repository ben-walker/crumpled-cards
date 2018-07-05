gulp = require('gulp')
plugins = require('gulp-load-plugins')()
config = require('./gulpconfig.json')

PATHS = config.paths

getTask = (task) ->
  return require(PATHS.task_dir + task)(gulp, plugins)

gulp.task('CLEAN', getTask('clean'))

gulp.task('coffee-lint', getTask('coffee-lint'))
gulp.task('coffee-compile', getTask('coffee-compile'))
gulp.task('DIST_COFFEE', gulp.series('coffee-lint', 'coffee-compile'))

gulp.task('WATCH', getTask('watch'))

gulp.task('SERVE', getTask('nodemon'))

gulp.task('default', gulp.series('CLEAN', 'DIST_COFFEE', 'WATCH', 'SERVE'))
