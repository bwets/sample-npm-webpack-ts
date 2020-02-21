const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

var babelOptions = {
  "presets": [
    ["env", {
      "modules": false
    }]
  ]
};


const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),

  new webpack.LoaderOptionsPlugin({
    options: {
      tslint: {
        emitErrors: true,
        failOnHint: true
      }
    }
  }),

  new HtmlWebpackPlugin()
];

var config = {
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: path.resolve('./src'),
  entry: {
    "app": './index.ts'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        },
        {
          loader: 'ts-loader'
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    compress: true,
    port: 3000,
    hot: true
  }
};

module.exports = config;
