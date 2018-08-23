import plugins from '../plugins';
import config from '../config';

export default (done) => {
  plugins.nodemon({
    script: config.paths.node_entry,
    delay: 2500,
  }).on('start', () => done());
};
