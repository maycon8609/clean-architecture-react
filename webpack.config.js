/* eslint @typescript-eslint/no-var-requires: "off" */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@data': path.join(__dirname, 'src', 'data'),
      '@domain': path.join(__dirname, 'src', 'domain'),
      '@infra': path.join(__dirname, 'src', 'infra'),
      '@main': path.join(__dirname, 'src', 'main'),
      '@presentation': path.join(__dirname, 'src', 'presentation')
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
}
