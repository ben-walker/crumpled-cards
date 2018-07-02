gulp = require('gulp')
plugins = require('gulp-load-plugins')()

getTask = (task) ->
  return require("./gulp_tasks/#{task}")(gulp, plugins)

gulp.task('clean', getTask('clean'))
gulp.task('coffee-lint', getTask('coffee-lint'))
gulp.task('coffee-compile', getTask('coffee-compile'))
