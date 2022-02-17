const path = require('path');

module.exports = {
  output: { publicPath: '', path: path.join(__dirname, './dist'), filename: '[name].js' },
};
