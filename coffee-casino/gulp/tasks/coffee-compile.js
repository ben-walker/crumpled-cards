const gulp = require('gulp')
const plugins = require('../plugins')
const config = require('../config')

module.exports = () => {
  return () => {
    gulp.src(config.globs.src_files)
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.coffee({ bare: true }))
      .pipe(plugins.babel({
        presets: ['env']
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(config.paths.build_dir))
  }
}
