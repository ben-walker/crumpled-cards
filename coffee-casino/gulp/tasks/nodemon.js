import plugins from '../plugins';
import config from '../config';

export default (done) => {
  plugins.nodemon({
    script: config.paths.node_entry,
    watch: [
      config.paths.build_dir,
    ],
  }).on('start', () => done());
};
