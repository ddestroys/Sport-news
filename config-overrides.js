const {addDecoratorsLegacy, override, disableEsLint} = require('customize-cra');
const rewireYAML = require('react-app-rewire-yaml');

module.exports = {
  webpack: override(addDecoratorsLegacy(), disableEsLint(), rewireYAML),
};
