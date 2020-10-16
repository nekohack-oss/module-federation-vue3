const path = require('path')

const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => ({
  mode: 'development',

  target: 'web',

  entry: './src/main.js',

  output: {
    publicPath: 'auto',
    assetModuleFilename: 'img/[name].[hash:7][ext]'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json'],
    alias: {
      vue: '@vue/runtime-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.prod }
          },
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js'
      },
      exposes: {}
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main']
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },

  devServer: {
    contentBase: path.join(__dirname),
    port: 3002,
    hot: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    }
  }
})
