const HtmlWebpackPlugin = require("html-webpack-plugin");
// const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./index.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    // modules: ["node_modules", "../"],
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /.js$/,
            use: {
              loader: require.resolve("babel-loader"),
              options: {
                // presets: ["react-app"],
                // plugins: [
                //   ["import", { libraryName: "antd", style: "css" }],
                //   "transform-decorators-legacy",
                // ],
              },
            },
            include: path.resolve("./src"),
            exclude: /node_modules/,
          },
        ],
      },
    ],
  },
  devtool: "eval",
  plugins: [
    // new InterpolateHtmlPlugin(env.raw),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: "./index.html",
    // }),
    // new webpack.DefinePlugin({
    //   ...env.stringified,
    // }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    progress: true,
    host: "0.0.0.0",
    // contentBase: "./public",
  },
};
