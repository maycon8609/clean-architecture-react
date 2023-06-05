/* eslint @typescript-eslint/no-var-requires: "off" */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public', 'js'),
    publicPath: path.join(__dirname, 'public', 'js'),
    fileName: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@data': path.join(__dirname, 'src', 'data'),
      '@domain': path.join(__dirname, 'src', 'domain'),
      '@infra': path.join(__dirname, 'src', 'infra'),
      '@main': path.join(__dirname, 'src', 'main')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDom'
  },
  plugins: [new CleanWebpackPlugin()]
}
