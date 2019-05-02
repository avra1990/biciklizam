const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    index: './src/assets/scripts/index.js',
    o_nama: './src/assets/scripts/index.js',
    saveti: './src/assets/scripts/index.js',
    ture: './src/assets/scripts/index.js',
    mapa: './src/assets/scripts/index.js',
    zanimljivosti: './src/assets/scripts/index.js',
    krusevac_ture: './src/assets/scripts/index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          }
          // Please note we are not running postcss here
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]',
          outputPath: 'assets' // the icons will be stored in dist/assets folder
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/pages/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/o_nama.html',
      inject: true,
      chunks: ['o_nama'],
      filename: 'o_nama.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/saveti.html',
      inject: true,
      chunks: ['saveti'],
      filename: 'saveti.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/ture.html',
      inject: true,
      chunks: ['ture'],
      filename: 'ture.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/krusevac_ture.html',
      inject: true,
      chunks: ['krusevac_ture'],
      filename: 'krusevac_ture.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/mapa.html',
      inject: true,
      chunks: ['mapa'],
      filename: 'mapa.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/zanimljivosti.html',
      inject: true,
      chunks: ['zanimljivosti'],
      filename: 'zanimljivosti.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new Dotenv()
  ]
};
