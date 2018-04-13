const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");

let config = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js",
        library: 'usearch',
        libraryTarget: 'window',
        libraryExport: 'default'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader'],
            })
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new UglifyJSPlugin(),
        new OptimizeCSSAssets()
    ],
    node: {
        fs: 'empty'
    }
};

module.exports = config;