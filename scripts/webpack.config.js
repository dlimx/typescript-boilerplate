const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.join(__dirname, '..', 'build', 'dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'babel-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
