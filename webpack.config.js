module.exports = {
  entry: "./game/src/index.js",
  output: {
    filename: "./build/game/client.js"
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
