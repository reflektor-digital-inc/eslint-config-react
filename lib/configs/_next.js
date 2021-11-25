/**
 * For NextJS-specific configurations
 */

const baseConfig = require('./_base');

module.exports = {
  plugins : baseConfig.plugins,
  extends : [
    ...baseConfig.extends,
    'next/core-web-vitals'
  ],
  settings : baseConfig.settings,
  rules    : baseConfig.rules
};
 