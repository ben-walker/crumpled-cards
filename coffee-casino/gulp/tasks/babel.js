import gulp from 'gulp';
import plugins from '../plugins';
import config from '../config';

export default () => gulp.src(config.globs.src_files)
  .pipe(plugins.changed(config.paths.build_dir))
  .pipe(plugins.sourcemaps.init({ loadMaps: true }))
  .pipe(plugins.babel({
    presets: ['env'],
  }))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.paths.build_dir));
