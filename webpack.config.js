const path = require('path');

module.exports = {
  entry: './use-instr.mjs',
  mode: 'none',
  resolve: {
    fallback: {
      'url': false,
      'http': false,
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
