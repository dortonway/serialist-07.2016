const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.development.config.js');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', (error) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  console.log('Available at http://localhost:3000');
});