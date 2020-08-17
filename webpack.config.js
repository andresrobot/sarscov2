
const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js'
  },
  resolve: {
    alias: {
        'express-handlebars': 'handlebars/dist/handlebars.js'
    }
 },
  target: 'node',
  mode: 'production',

};