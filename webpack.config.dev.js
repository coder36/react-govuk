var path = require('path');
var webpack = require('webpack');
require('imports-loader');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      { test: /govuk_frontend_toolkit\/.*.js$/, loader: "imports?this=>window"},
      {test: /\.js$/, loaders: ['babel?stage=0'], include: path.join(__dirname, 'src')},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass' ]  },
      {test: /\.css/, loaders: ['style', 'css' ]  }
    ]
  }
};
