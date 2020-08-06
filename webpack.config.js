const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
  target: "web",  
  context: ROOT,
    entry: {
        'main': './index.js'
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      library: "@quintenkasteel/q-script",
      globalObject: "this",
      umdNamedDefine: true,
      libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: /(node_modules)/,
              use: 'babel-loader',
            },
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 9000,
      historyApiFallback: true
    },
};