const webpack            = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch', // активация HMR для React
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    './src/main.js' // Точка входа
  ],
  devtool: 'source-map',
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true, // respond to 404s with index.html
    hot: true, // enable HMR on the server
    compress: true,
    inline: true,
    lazy: false,
    overlay: {
        warnings: true,
        errors: true
    }
  }
};
