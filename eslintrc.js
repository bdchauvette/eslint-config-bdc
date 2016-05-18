const path = require('path');
const merge = require('merge');
const requireAll = require('require-all');

const core = requireAll(path.resolve(__dirname, 'core'));
const plugins = requireAll(path.resolve(__dirname, 'plugins'));

const config = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
};

const addConfig = (type) => (subtype) => merge.recursive(config, type[subtype]);

Object.keys(core).forEach(addConfig(core));
Object.keys(plugins).forEach(addConfig(plugins));

module.exports = config;
