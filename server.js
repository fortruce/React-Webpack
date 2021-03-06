var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'dist'),
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err)
    return console.log(err);
  console.log('Listening at localhost:3000');
});