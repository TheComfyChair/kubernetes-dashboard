const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack/base.config');


module.exports = ({
  env = 'dev',
  staticDir = '',
} = {}) => {
  console.log(`📦  Transpiling for ${env}...`);
  return webpackMerge(
    baseConfig({
      location: __dirname,
      staticDir,
    }),
    require(`./webpack/${env}.config`)({
      location: __dirname,
      staticDir,
    }));
};
