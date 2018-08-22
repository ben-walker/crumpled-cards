const gulp = require('gulp');
const plugins = require('../plugins');
const config = require('../config');

module.exports = () => (done) => {
  gulp.src(config.globs.src_files)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
  done();
};
