/*
 * @Author: Yuhan 
 * @Date: 2018-03-28 17:57:59 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-04-01 11:00:01
 */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const WEBPACK_ENV = process.env.WEBPACK_ENV || "dev";

const getHtmlConfig = name => {
  return {
    template: `./src/view/${name}.html`,
    filename: `view/${name}.html`,
    inject: true,
    hash: true,
    chunks: ["commons", name]
  };
};

const config = {
  entry: {
    commons: ["./src/page/commons/index.js"],
    index: ["./src/page/index/index.js"],
    login: ["./src/page/login/index.js"]
  },
  output: {
    path: "./dist",
    publicPath: "/dist",
    filename: "js/[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=100&name=resource/[name].[ext]"
      }
    ]
  },

  resolve: {
    alias: {
      node_modules: __dirname + "/node_modules",
      services: __dirname + "/src/services",
      utils: __dirname + "/src/utils",
      page: __dirname + "/src/page",
      service: __dirname + "/src/service",
      image: __dirname + "/src/image"
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["commons"],
      filename: "js/[name].js"
    }),
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin(getHtmlConfig("index")),
    new HtmlWebpackPlugin(getHtmlConfig("login"))
  ]

  // externals: {
  //   jquery: "window.jQuery"
  // }
};

if (WEBPACK_ENV === "dev") {
  config.entry.commons.push("webpack-dev-server/client?http://localhost:8088");
}

module.exports = config;
