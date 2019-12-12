const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
  new LoadablePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      IS_BROWSER: "true"
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new WorkboxPlugin.InjectManifest({
    swSrc: path.resolve(__dirname, 'src/shared/service-workers/sw.js'),
    swDest: `${distPath}/web/service-worker.js`
  }),
  new webpack.HashedModuleIdsPlugin(),  // so hashnames don't change unexpectedly
  new CleanWebpackPlugin()
];

module.exports = {
  mode: 'production',
  context: srcPath,
  target: 'web',
  entry: {
    main: `${srcPath}/client/index.js`,
    home:  `${srcPath}/shared/containers/Home.js`,
    pizzas:  `${srcPath}/shared/containers/Pizzas.js`,
  },
  output: {
    path: `${distPath}/web/`,
    filename: '[name].[hash].js',
    chunkFilename: '[id].[contenthash:8].js',
    publicPath: '/assets/web/'
  },
  resolve: {
    modules: ['node_modules', 'shared'],
    extensions: ['*', '.js', '.json']
  },
  stats: {
    errors: true,
    errorDetails: true,
    warnings: true
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
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              enforce: 'pre',
              limit: 10 * 1024,
            }
          }
        ],
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
          }
        }
      },
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name - node_modules/packageName/not/small/part.js or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm packages are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    },
    minimizer: [new TerserPlugin({})]
  },
  plugins,
  devtool: 'hidden-source-map'
};
