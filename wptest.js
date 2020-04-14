const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /.jsx?$/,
            use: {
              loader: require.resolve("babel-loader"),
              options: {
                presets: ["react-app"],
                plugins: [
                  ["import", { libraryName: "antd", style: "css" }],
                  "transform-decorators-legacy",
                ],
              },
            },
            include: path.resolve("./src"),
            exclude: /node_modules/,
          },
          //注：我们自己不写css，因此只有第3方库有css，它们的css不使用module(antd)
          {
            test: /\.css$/,
            use: [
              require.resolve("style-loader"),
              require.resolve("css-loader"),
            ],
          },
          //我们自己只写less，且必须使用module
          {
            test: /\.less$/,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: { modules: true },
              },
              {
                loader: require.resolve("less-loader"),
                options: { javascriptEnabled: true },
              },
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  devtool: "eval",
  plugins: [
    new InterpolateHtmlPlugin({}),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    // progress: true,
    // host: '0.0.0.0',
    // contentBase: './public',
  },
};
