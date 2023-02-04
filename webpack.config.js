const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,         // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],    // <-- added `.jsx` here
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.ProvidePlugin({
      ReactDOM: 'react-dom'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]

}
