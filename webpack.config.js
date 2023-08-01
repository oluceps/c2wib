const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const WebpackMode = require("webpack-mode");


module.exports = {
  mode: `${WebpackMode}`,
  entry: './index.js',
  output: {
    filename: "[name].bundle.js",
    path: __dirname + '/dist',
  },
  resolve: {
    alias: {
      emception: "./emception/build/emception",
    },
    fallback: {
      "llvm-box.wasm": false,
      "binaryen-box.wasm": false,
      "python.wasm": false,
      "quicknode.wasm": false,
      "path": false,
      "node-fetch": false,
      "vm": false
    },
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.wasm$/,
      type: "asset/resource",
    }, {
      test: /\.(pack|br|a)$/,
      type: "asset/resource",
    }, {
      test: /\.worker\.m?js$/,
      exclude: /monaco-editor/,
      use: ["worker-loader"],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './index.html',
      title: "test",

    }),
    new MonacoWebpackPlugin({ languages: ["c"] }),
    new CopyWebpackPlugin({
      patterns: [{
        from: "./emception/build/emception/brotli/brotli.wasm",
        to: "brotli/brotli.wasm"
      }, {
        from: "./emception/build/emception/wasm-package/wasm-package.wasm",
        to: "wasm-package/wasm-package.wasm"
      }],
    }),
    new CompressionPlugin({
      exclude: /\.br$/,
    }),
  ],
  devServer: {
    allowedHosts: "auto",
    port: "auto",
    server: "https",
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    }
  },
};
;
