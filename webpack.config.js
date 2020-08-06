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
    chunk: './src/array/Chunk.js',
    compact: './src/array/Compact.js',
    difference: './src/array/Difference.js',
    drop: './src/array/Drop.js',
    dropEnd: './src/array/DropEnd.js',
    fill: './src/array/Fill.js',
    findFirst: './src/array/FindFirst.js',
    findFirstIndex: './src/array/FindFirstIndex.js',
    flatten: './src/array/Flatten.js',
    flattenDeep: './src/array/FlattenDeep.js',
    groupBy: './src/array/GroupBy.js',
    head: './src/array/Head.js',
    includes: './src/array/Includes.js',
    intersect: './src/array/Intersect.js',
    keyBy: './src/array/KeyBy.js',
    lastIndexOf: './src/array/LastIndexOf.js',
    maxBy: './src/array/MaxBy.js',
    minBy: './src/array/MinBy.js',
    pluck: './src/array/Pluck.js',
    sample: './src/array/Sample.js',
    size: './src/array/Size.js',
    sortBy: './src/array/SortBy.js',
    tail: './src/array/Tail.js',
    takeEnd: './src/array/TakeEnd.js',
    unique: './src/array/Unique.js',
    DOM: './src/DOM/DOM.js',
    inRange: './src/numbers/InRange.js',
    randomInt: './src/numbers/RandomInt.js',
    fromPair: './src/object/FromPair.js',
    get: './src/object/Get.js',
    has: './src/object/Has.js',
    keys: './src/object/Keys.js',
    pick: './src/object/Pick.js',
    pickBy: './src/object/PickBy.js',
    toPair: './src/object/ToPair.js',
    values: './src/object/Values.js',
    uuid: './src/other/Uuid.js',
    isEmpty: './src/types/IsEmpty.js',
    isFunction: './src/types/IsFunction.js',
    isString: './src/types/IsString.js'
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
