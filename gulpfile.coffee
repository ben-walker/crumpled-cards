gulp = require('gulp')
plugins = require('gulp-load-plugins')()
fs = require('fs')
path = require('path')
config = require('./gulpconfig.json')

PATHS = config.paths
GLOBS = config.globs

stripExt = (file) ->
  return path.basename(file, path.extname(file))

getTask = (task) ->
  return require(PATHS.task_dir + task)(gulp, plugins, config)

loadTasks = ->
  tasks = fs.readdirSync(PATHS.task_dir).map (file) -> stripExt(file)
  tasks.forEach (task) -> gulp.task(task, getTask(task))

loadTasks()

gulp.task('dist-coffee', gulp.series('coffee-lint', 'coffee-compile'))
gulp.task 'watch', (done) ->
  gulp.watch(GLOBS.src_coffee, gulp.series('dist-coffee'))
  done()

gulp.task('default', gulp.series('clean', 'dist-coffee', 'watch', 'nodemon'))
