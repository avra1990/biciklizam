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
    blog: './src/assets/scripts/index.js',
    ture: './src/assets/scripts/index.js',
    zanimljivosti: './src/assets/scripts/index.js',
    kontakt: './src/assets/scripts/index.js',
    amaterizam: './src/assets/scripts/index.js'
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
      template: './src/assets/pages/amaterizam.html',
      inject: true,
      chunks: ['amaterizam'],
      filename: 'amaterizam.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/saveti.html',
      inject: true,
      chunks: ['saveti'],
      filename: 'saveti.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/blog.html',
      inject: true,
      chunks: ['blog'],
      filename: 'blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/ture.html',
      inject: true,
      chunks: ['ture'],
      filename: 'ture.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/zanimljivosti.html',
      inject: true,
      chunks: ['zanimljivosti'],
      filename: 'zanimljivosti.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/kontakt.html',
      inject: true,
      chunks: ['kontakt'],
      filename: 'kontakt.html'
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
