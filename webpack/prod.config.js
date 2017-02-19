const webpack = require('webpack');

module.exports = () => ({
  output: {
    filename: '[chunkhash].[name].js',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('prod'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
      },
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      comments: false,
    }),
  ],
});