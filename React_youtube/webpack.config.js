const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/
      },
      {
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'sass-loader']
        }),
        test: /\.scss$/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
