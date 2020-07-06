const webpack = require("webpack"); //node common JS syntax
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web", //determines how webpack bundles our code (web is for browser)
  devTool: "cheap-module-source-map", //source map, typically used in dev to see source code
  entry: "./src/index", //also webpack default
  output: {
    //in dev, these values are served from memory (not visible in file structure), but still necessary
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    fileName: "bundle.js",
  },
  devServer: {
    //how app is served in development, will be using webpack here, also possible to do via express
    stats: "minimal", //reduces info wrote to cmd line
    overlay: true, //overlays errors in browser
    historyApiFallback: true, //all reqs sent to index.html (deeplinks handled by react router)
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
