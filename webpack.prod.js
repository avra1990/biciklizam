const path = require('path');

// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cssNano = require('cssnano');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/assets/scripts/index.js',
    ture: './src/assets/scripts/index.js',
    krusevac_ture: './src/assets/scripts/index.js',
    o_nama: './src/assets/scripts/index.js',
    saveti: './src/assets/scripts/index.js',
    zanimljivosti: './src/assets/scripts/index.js'
  },
  output: {
    filename: '[name].[hash:20].js',
    path: buildPath
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
        test: /\.(scss|css|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            // Runs compiled CSS through postcss for vendor prefixing
            loader: 'postcss-loader',
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
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:20].[ext]',
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
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/o_nama.html',
      inject: 'body',
      chunks: ['o_nama'],
      filename: 'o_nama.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/saveti.html',
      inject: 'body',
      chunks: ['saveti'],
      filename: 'saveti.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/ture/ture.html',
      inject: 'body',
      chunks: ['ture'],
      filename: 'ture.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/ture/krusevac_ture.html',
      inject: 'body',
      chunks: ['krusevac_ture'],
      filename: 'krusevac_ture.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/pages/zanimljivosti.html',
      inject: 'body',
      chunks: ['zanimljivosti'],
      filename: 'zanimljivosti.html'
    }),
    new CleanWebpackPlugin(buildPath),
    // new FaviconsWebpackPlugin({
    //   // Your source logo
    //   logo: './src/assets/icon.png',
    //   // The prefix for all image files (might be a folder or a name)
    //   prefix: 'icons-[hash]/',
    //   // Generate a cache file with control hashes and
    //   // don't rebuild the favicons until those hashes change
    //   persistentCache: true,
    //   // Inject the html into the html-webpack-plugin
    //   inject: true,
    //   // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
    //   background: '#fff',
    //   // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
    //   title: 'biciklizam}}',

    //   // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     coast: false,
    //     favicons: true,
    //     firefox: true,
    //     opengraph: false,
    //     twitter: false,
    //     yandex: false,
    //     windows: false
    //   }
    // }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssNano,
      cssProcessorOptions: {
        map: {
          inline: false
        },
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
};
