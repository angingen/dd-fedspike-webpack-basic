# Basics

```bash
npm install webpack webpack-cli --save-dev
```

## Entry and output

```javascript
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

## Loaders part 1

> Webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js.

```bash
npm install --save-dev css-loader
```

## Plugins

### mini-css-extract-plugin

> This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

```bash
npm install --save-dev mini-css-extract-plugin
```

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //...
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```

### html-webpack-plugin

> The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

```bash
npm install --save-dev html-webpack-plugin
```

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  //...
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
```

## Loader part 2

```bash
npm install --save-dev html-loader
```

```bash
npm install --save-dev style-loader
```

---

# Reference

[Loaders](https://webpack.js.org/concepts/#loaders)
