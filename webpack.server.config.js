const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
  new LoadablePlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new webpack.HashedModuleIdsPlugin(),
  new CleanWebpackPlugin()
];

module.exports = {
  mode: 'production',
  context: srcPath,
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    chunkFilename: '[id].[contenthash:8].js',
    path: `${distPath}/node/`,
    publicPath: '/assets/node/'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              enforce: 'pre',
              limit: 10 * 1024
            }
          }
        ]
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: { default: false }
    },
    minimizer: [ new TerserPlugin({}) ]
  },
  plugins,
  devtool: 'hidden-source-map',
  externals: nodeExternals()
};
