var path = require('path');

module.exports = {
  entry: "./game/src/index.js",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "/game/public/client.js"
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
  resolveLoader: {
    alias: {
      'copy': 'file-loader?name=[path][name].[ext]'
    }
  }
}
