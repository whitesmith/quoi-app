var path = require('path');

module.exports = {
  entry: "./game/src/index.js",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "/game/client.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
}
