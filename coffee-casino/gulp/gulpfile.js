const gulp = require('gulp')
const utilities = require('./utilities')
const config = require('./config')

utilities.loadTasks(gulp)

gulp.task('build', gulp.series('babel'))
gulp.task('watch', done => {
  gulp.watch(config.globs.src_files, gulp.series('build'))
  done()
})

gulp.task('default', gulp.series('clean', 'build', 'watch', 'nodemon'))
gulp.task('production', gulp.series('clean', 'build'))
