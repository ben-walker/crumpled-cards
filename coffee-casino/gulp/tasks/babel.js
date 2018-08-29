import gulp from 'gulp';
import plugins from '../plugins';
import config from '../config';

export default () => gulp.src(config.globs.src_files)
  .pipe(plugins.changed(config.paths.build_dir))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.babel({
    presets: ['@babel/env'],
  }))
  .pipe(plugins.sourcemaps.write('./maps'))
  .pipe(gulp.dest(config.paths.build_dir));
