# 极客时间 webpack 学习

## 为什么要构建工具
- 转换 ES6 语法
- 转换 JSX
- css 前缀补全/预处理器
- 压缩混淆
- 图片压缩

## 为什么选择webpack

- 社区生态丰富
- 配置灵活和插件化扩展
- 官方更新迭代速度快

## webpack 配置文件名称

### webpack 默认配置文件：webpack.config.js,可以通过 webpack --config 指定配置文件
```
webpack --config webpack.develop.config.js
```
## webpack 配置组成
```js
module.exports = {
    entry: './src/index.js' // 打包入口文件
    output: './dist/main.js' // 打包的输出
    mode: 'production', // 环境
    module: {
        // loader 配置
        rules: [
            {test: /\.txt$/,use: 'raw-loader'}
        ]
    },
    // 插件配置
    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    ]
}
```

## 通过 npm script 运行 webpack
```js
{
    ...
    "scripts":{
        "build":"webpack" // 原理：模块局部安装会在node_modules/.bin目录创建软链接
    }
    ...
}
```