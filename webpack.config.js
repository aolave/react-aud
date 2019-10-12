const webpack = require('webpack')
const path = require('path')
require('dotenv').config()

const current_entry = process.env.WEBPACK_CURRENT_ENTRY

console.log('Current entry: ' + current_entry)

let entry = {}
entry[current_entry.replace('/', '__')] =
  '../webapps/src/' + (current_entry.includes('/') ? current_entry + '.tsx' : current_entry + '/index.tsx')

module.exports = (env, argv) => {
  const TerserPlugin = require('terser-webpack-plugin')

  let config = {
    entry: entry,
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
      library: 'webpackLibs'
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: [ 'lodash' ]
          }
        }
      ]
    },
    externals: [
      { react: 'React' },
      {
        'react-dom': 'ReactDOM'
      },
      {
        lodash: {
          commonjs: 'lodash',
          amd: 'lodash',
          root: '_'
        }
      }
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: true,
            ecma: 5,
            mangle: true,
            ie8: false,
            safari10: false,
            output: { comments: false, beautify: false }
          }
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      lazy: true,
      filename: current_entry + '.js',
      contentBase: [ path.join(__dirname, '/srv/'), path.join(__dirname, '/dist/'), path.join(__dirname, '/../') ]
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        publicPath: 'http://auditbrain.local/webapps/dist/',
        filename: '[file].map'
      })
    ]
  }

  return config
}
