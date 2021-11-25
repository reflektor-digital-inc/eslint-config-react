const { baseConfig } = require('./lib/configs');

module.exports = {
  parserOptions : {
    sourceType   : 'module',
    ecmaFeatures : { jsx : true }
  },
  env : {
    browser : true,
    node    : true,
    es6     : true
  },
  settings : baseConfig.settings,
  plugins  : baseConfig.plugins,
  extends  : baseConfig.extends,
  rules    : baseConfig.rules
};
