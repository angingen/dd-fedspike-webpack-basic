// webpack is running in node env, therefore we use cjs require syntax to load the path module
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000,
    watchFiles: ["src/index.html"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i, // regex: match file extension end as .css
        use: [MiniCssExtractPlugin.loader, "css-loader"], // css-loader: load css files, MiniCssExtractPlugin.loader: extract css into a separate file
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
