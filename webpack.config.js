let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let stylelintPrettier = require('stylelint-webpack-plugin');

let conf = {
  entry: {
    index: './src/js/index.js',
    gallery: './src/js/gallery.js'
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].js'
  },

  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          //fallback: "style-loader",
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new stylelintPrettier({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.s?(a|c)ss',
      emitErrors: false,
      failOnError: false,
      quiet: true,
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.png'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['gallery'],
      filename: 'gallery.html',
      template: 'src/gallery.html',
      favicon: 'src/favicon.png'
    }),
    new CleanWebpackPlugin(['docs'])
  ]
};
module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production
    ? 'source-map'
    : 'eval-sourcemap';
  return conf;
};