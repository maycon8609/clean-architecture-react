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
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@data': path.join(__dirname, 'src', 'data'),
      '@domain': path.join(__dirname, 'src', 'domain'),
      '@infra': path.join(__dirname, 'src', 'infra'),
      '@main': path.join(__dirname, 'src', 'main')
    }
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
