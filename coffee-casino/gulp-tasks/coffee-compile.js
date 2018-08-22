module.exports = (gulp, plugins, config) => {
  PATHS = config.paths
  GLOBS = config.globs
  return () => {
    gulp.src(GLOBS.src_files)
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.coffee({ bare: true }))
      .pipe(plugins.babel({
        presets: ['env']
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(PATHS.build_dir))
  }
}
