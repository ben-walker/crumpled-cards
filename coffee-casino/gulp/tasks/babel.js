const gulp = require('gulp')
const plugins = require('../plugins')
const config = require('../config')

module.exports = () => {
  return (done) => {
    gulp.src(config.globs.src_files)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel({
        presets: ['env']
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(config.paths.build_dir))
    done()
  }
}
