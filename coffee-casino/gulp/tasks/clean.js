import gulp from 'gulp';
import plugins from '../plugins';
import config from '../config';

export default () => gulp.src(config.paths.build_dir, {
  read: false,
  allowEmpty: true,
})
  .pipe(plugins.clean({ force: true }));
