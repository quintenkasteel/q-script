const path = require('path');
const webpack = require('webpack');

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
      library: "Qutil",
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },
    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
            * LOADERS
            *****************/
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