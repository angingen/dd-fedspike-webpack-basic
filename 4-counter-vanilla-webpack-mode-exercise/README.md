# Mode: production vs Deployment

**Q: what do we want to achieve when bundle our code in deployment and production mode?**

> The goals of development and production builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

## development mode

### watch mode

```json
{
  "dev:watch": "webpack --config webpack.dev.js --watch"
}
```

### webpack-dev-server

[DevServer](https://webpack.js.org/configuration/dev-server/)

```bash
npm install --save-dev webpack-dev-server
```

```json
{
  "dev:watch": "webpack --config webpack.dev.js --watch"
}
```

```javascript
// webpack.dev.js

module.exports = {
  //...
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000,
    watchFiles: ["src/index.html"],
  },
};
```

### source map

- eval-source-map
- eval-nosources-source-map
- eval-cheap-source-map
- source-map
  etc...

## Production mode

### Optimisation

**TerserPlugin**

> With mode set to ‘production’, this will load the TerserPlugin, which is used to minify and minimise your javascript code (doing tree shaking).

**css-minimizer-webpack-plugin**

```bash
npm install css-minimizer-webpack-plugin --save-dev
```

```javascript
// webpack.dev.js

module.exports = {
  //...
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
};
```

### Hash and clean up

```javascript
// webpack.dev.js

module.exports = {
  //...
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
    //...
  ],
};
```

---

# Reference

[Production](https://webpack.js.org/guides/production/)
[Deployment](https://webpack.js.org/guides/development/)
[Devtool](https://webpack.js.org/configuration/devtool/)
