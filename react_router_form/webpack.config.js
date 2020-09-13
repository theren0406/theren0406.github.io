const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  devServer: {
    contentBase: './',
    compress: true,
    port: 8000
  }
};