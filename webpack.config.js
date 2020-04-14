const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/build"),
  },
  devServer: {
    hot: true,
    // writeToDisk: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
