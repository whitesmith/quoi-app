module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "public/bundle.js"
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
