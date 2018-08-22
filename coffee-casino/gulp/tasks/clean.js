const gulp = require('gulp')
const plugins = require('../plugins')
const config = require('../config')

module.exports = () => {
  return (done) => {
    gulp.src(config.paths.build_dir, {
      read: false,
      allowEmpty: true
    }).pipe(plugins.clean({ force: true }))
    done()
  }
}
