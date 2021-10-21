'use strict';

const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: "./src/index.js",
        search: "./src/search.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        "rules": [
            // 使用 babel 解析 es6
            {
                test: /.js$/,
                use: "babel-loader"
            },
            // 解析css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 解析less
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // 解析文件
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist/")
        },
        hot: true
    }
}