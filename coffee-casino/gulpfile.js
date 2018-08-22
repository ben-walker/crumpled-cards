const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()
const fs = require('fs')
const path = require('path')
const config = require('./gulpconfig')

const PATHS = config.paths
const GLOBS = config.globs

function stripExt(file) {
  return path.basename(file, path.extname(file))
}

function getTask(task) {
  return require(PATHS.task_dir + task)(gulp, plugins, config)
}

function loadTasks() {
  const TASKS = fs.readdirSync(PATHS.task_dir).map(file => stripExt(file))
  TASKS.forEach((task) => gulp.task(task, getTask(task)))
}

loadTasks()

gulp.task('build', gulp.series('clean'))
gulp.task('watch', (done) => {
  gulp.watch(GLOBS.src_files, gulp.series('build'))
  done()
})

gulp.task('default', gulp.series('clean', 'build', 'watch', 'nodemon'))
gulp.task('production', gulp.series('clean', 'build'))
