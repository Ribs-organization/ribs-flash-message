const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "./css/style.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: ['./source/scss/style.scss', './source/js/ribs-flash-message.js'],
  output: {
    filename: 'js/ribs-flash-message.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'source/'), path.join(__dirname, 'node_modules/ribs-core/')],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader', options: {minimize: true}}
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',    // where the fonts will go
            publicPath: '../fonts/'       // override the default path
          }
        }]
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    extractSass,
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename:'css/[id].css',
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};