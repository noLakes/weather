const path = require('path')
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv()
  ]
};