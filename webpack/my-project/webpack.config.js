'use strict';

const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
        search: "./src/search.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        "rules": [
            // 使用 babel 解析 es6
            {
                test: /.js$/,
                use: "babel-loader"
            }
        ]
    }
}