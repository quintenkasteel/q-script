const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

module.exports = {
  target: "web",
  mode: "production",
  entry: {
    index: './src/index.js',
    difference: './src/utils/array/Difference.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist"),
    library: "@quintenkasteel/q-script",
    globalObject: "this",
    umdNamedDefine: true,
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   exclude: /(node_modules)/,
      //   use: 'babel-loader',
      //   options: [
      //     "sourceType": "module",
      //   ]
      // },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    port: 9000,
  },
};
