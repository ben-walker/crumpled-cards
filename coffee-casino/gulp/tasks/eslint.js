import gulp from 'gulp';
import plugins from '../plugins';
import config from '../config';

export default () => gulp.src(config.globs.src_files)
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
