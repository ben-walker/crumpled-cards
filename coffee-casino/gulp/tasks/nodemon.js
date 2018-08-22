const plugins = require('../plugins');
const config = require('../config');

module.exports = () => (done) => {
  plugins.nodemon({
    script: config.paths.node_entry,
    delay: 2500,
  }).on('start', () => done());
};
