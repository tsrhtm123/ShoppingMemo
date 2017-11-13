var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './res/assets/js/index.js'
  },
  output: {
    path: path.resolve(__dirname + '/www/dist/js'),
    publicPath: "/www/dist/js/",
    filename: '[name].bundle.js'
  },
  resolve: {  
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.jsx', '.vue'],
    modules: [
        "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
              js: 'babel-loader'
        }
    }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: [['es2015', { loose: true, modules: false }]],
        }
      },
      {
        test: /\.css$/,
        loaders: ['css-loader'],
      },
      {
        test: /\.(jpe?g|png|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
        loader: 'url-loader?limit=100000'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
    ]
  },
  devtool: 'source-map'
};