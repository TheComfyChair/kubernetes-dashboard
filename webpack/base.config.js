const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = ({
  location = __dirname,
  staticDir = '',
} = {}) => ({
  context: location,
  entry: {
    'react-app': path.join(location, 'src'),
    vendor: [
      'react',
      'react-dom',
      'react-motion',
      'react-redux',
      'react-router',
      'redux',
      'redux-saga',
      'redux-scc',
      'reselect',
      'lodash',
      'moment',
      'humanize-plus',
      'axios',
      'babel-polyfill',
    ],
  },
  output: {
    path: path.join(location, '/dist', staticDir),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(location, 'src'),
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: path.join(location, '.eslintrc.js'),
        },
      },
      {
        test: /\.(js|jsx)$/,
        include:  path.join(location, 'src'),
        loader: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          'image-webpack-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss', '.svg', '.png', '.jpg', 'jpeg', '.gif'],
    alias: {
      css: path.join(path.join(location, 'src'), '/assets/css'),
      images: path.join(path.join(location, 'src'), '/assets/images'),
    }
  },
  plugins: [
    function() {
      this.plugin('done', () =>
        setTimeout(() => console.log('\nFinished at ' + (new Date).toLocaleTimeString() + '\n'), 0))
    },
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      title: 'React example app',
      template: path.join(location, 'webpack', 'index.ejs'),
    }),
    new ManifestPlugin(),
  ]
});