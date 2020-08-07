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
    index: "./src/index.js",
    chunk: "./src/array/Chunk.js",
    compact: "./src/array/Compact.js",
    difference: "./src/array/Difference.js",
    drop: "./src/array/Drop.js",
    dropEnd: "./src/array/DropEnd.js",
    fill: "./src/array/Fill.js",
    findFirst: "./src/array/FindFirst.js",
    findFirstIndex: "./src/array/FindFirstIndex.js",
    flatten: "./src/array/Flatten.js",
    flattenDeep: "./src/array/FlattenDeep.js",
    groupBy: "./src/array/GroupBy.js",
    head: "./src/array/Head.js",
    includes: "./src/array/Includes.js",
    intersect: "./src/array/Intersect.js",
    keyBy: "./src/array/KeyBy.js",
    lastIndexOf: "./src/array/LastIndexOf.js",
    maxBy: "./src/array/MaxBy.js",
    minBy: "./src/array/MinBy.js",
    pluck: "./src/array/Pluck.js",
    sample: "./src/array/Sample.js",
    size: "./src/array/Size.js",
    sortBy: "./src/array/SortBy.js",
    tail: "./src/array/Tail.js",
    takeEnd: "./src/array/TakeEnd.js",
    unique: "./src/array/Unique.js",
    DOM: "./src/DOM/DOM.js",
    inRange: "./src/numbers/InRange.js",
    randomInt: "./src/numbers/RandomInt.js",
    fromPair: "./src/object/FromPair.js",
    get: "./src/object/Get.js",
    has: "./src/object/Has.js",
    keys: "./src/object/Keys.js",
    pick: "./src/object/Pick.js",
    pickBy: "./src/object/PickBy.js",
    toPair: "./src/object/ToPair.js",
    values: "./src/object/Values.js",
    uuid: "./src/other/Uuid.js",
    isEmpty: "./src/types/IsEmpty.js",
    isFunction: "./src/types/IsFunction.js",
    isString: "./src/types/IsString.js",
    uuid: "./src/other/Uuid.js",
    timeDifference: "./src/time/display/TimeDifference.js",
    isBefore: "./src/time/display/IsBefore.js",
    isAfter: "./src/time/display/IsAfter.js",
    isSame: "./src/time/display/IsSame.js",
    isLeapYear: "./src/time/display/IsLeapYear.js",
    daysInMonth: "./src/time/get-set/DaysInMonth.js",
    day: "./src/time/get-set/Day.js",
    hour: "./src/time/get-set/Hours.js",
    maxDate: "./src/time/get-set/MaxDate.js",
    milliseconds: "./src/time/get-set/MilliSeconds.js",
    minDate: "./src/time/get-set/MinDate.js",
    minutes: "./src/time/get-set/Minutes.js",
    seconds: "./src/time/get-set/Seconds.js",
    setDay: "./src/time/get-set/SetDay.js",
    setHours: "./src/time/get-set/SetHours.js",
    setMilliseconds: "./src/time/get-set/SetMilliseconds.js",
    setMinutes: "./src/time/get-set/SetMinutes.js",
    setSeconds: "./src/time/get-set/SetSeconds.js",
    week: "./src/time/get-set/Week.js",
    addTime: "./src/time/manipulate/Add.js",
    subtractTime: "./src/time/manipulate/Subtract.js",
    stringDateFormat: "./src/time/parse/StringDateFormat.js",
    stringTimeFormat: "./src/time/parse/StringTimeFormat.js",
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
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/env"
          ],
        },
      },
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
