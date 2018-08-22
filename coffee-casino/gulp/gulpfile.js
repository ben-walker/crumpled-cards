const gulp = require('gulp');
const config = require('./config');
const {
  babel,
  clean,
  eslint,
  nodemon,
} = require('./tasks');

gulp.task('babel', babel);
gulp.task('clean', clean);
gulp.task('eslint', eslint);
gulp.task('nodemon', nodemon);

gulp.task('Build', gulp.series('eslint', 'babel'));
gulp.task('Watch', (done) => {
  gulp.watch(config.globs.src_files, gulp.series('Build'));
  done();
});

gulp.task('default', gulp.series('clean', 'Build', 'Watch', 'nodemon'));
gulp.task('production', gulp.series('clean', 'Build'));
