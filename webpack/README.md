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

## Entry 入口

### 单入口
> entry 是一个字符串
```js
module.exports = {
    entry: './path/to/my/entry/files'
}
```

### 多入口
> entry 是一个对象
```js
module.exports = {
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
    }
}
```

## Output 出口

### 单入口
```js
module.exports = {
    output: "bundle.js"
}
```

### 多入口
```js
module.exports = {
    output: [name].js // 使用占位符来区分
}
```

## Loaders
> webpack开箱即用只支持js和json两种文件类型，通过 Loaders 去支持其他文件类型并且把它们转化成有效的模块，并且可以添加到依赖中
> 本身是一个函数，接受源文件作为参数，返回转换的结果

```js
module.exports = {
    ...
    module:{
        rules: [
            // test 指定匹配规则 use 指定使用的loader名称
            {test: "/\.txt$/",use: "raw-loader"}
        ]
    }
    ...
}
```

## Plugins
> Plugins-插件 用于bundle文件的优化，资源管理和环境变量的注入
> 作用于整个构建过程
```js
module.exports = {
    output: {
        filename: "bundle.js"
    },
    // 放到 plugins 数组里
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html"})
    ]
}
```