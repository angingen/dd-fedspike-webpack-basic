// webpack is running in node env, therefore we use cjs require syntax to load the path module
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[chunkhash:8].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.[chunkhash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  devtool: "source-map",
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
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
