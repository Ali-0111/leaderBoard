const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 1: npm install webpack webpack-cli --save-dev
  entry: './src/index.js',

  // 2: npm install webpack-dev-server --save-dev
  devServer: {
    static: './dist',
  },

  // 3: npm install html-webpack-plugin --save-dev
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // npm install style-loader css-loader --save-dev
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};


// src
/* 

https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/exercises/exercise_set_up_project_with_webpack.md

*/