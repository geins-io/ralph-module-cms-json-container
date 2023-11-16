const path = require('path');

// Change this to match your module name
const moduleName = 'ralph-module-cms';

const defaults = {
  name: moduleName,
  enabled: true,

  // your default options goes here
};

module.exports = async function(moduleOptions) {
  const options = {
    ...defaults,
    ...this.options[moduleName],
    ...moduleOptions
  };

  if (!options.enabled) {
    return false;
  }

  this.nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: path.resolve(__dirname, 'components'),
      prefix: 'Geins',
      extensions: ['vue']
    });
  });

  return true;
};
module.exports.meta = require('../package.json');
