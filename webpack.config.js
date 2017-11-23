process.env.NODE_ENV = 'production'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './Components/Background.jsx',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    "alias": {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/}
    ]
  }
}
