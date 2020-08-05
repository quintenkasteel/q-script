const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
  target: "es5",  
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

    devtool: 'cheap-module-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 9000,
      historyApiFallback: true
    },
};