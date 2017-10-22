const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '../public/js/site.js',
    path: path.resolve(__dirname, 'dist')
  }
};
