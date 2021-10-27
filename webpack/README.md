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
            {
                test: /\.txt$/,
                use: "raw-loader"
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
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // 解析图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    "file-loader"
                ]
            }
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

// 解析 es6 和 react 语法需要安装babel
// 解析 es6
npm i @babel/core @babel/preset-env babel-loader -D
// 解析 react
npm i react react-dom @babel/preset-react -D
```

## mode 指定当前的构建环境
> production、development、none
> 设置 mode 可以使用 webpack 的内置函数

## 文件监听
- 启动 webpack 时，带上 --watch
- 在 webpack.config.js 中加上 watch: true

```js
module.exports = {
    // 默认false
    watch: true,
    // 只有开启监听模式时，watchOptions 才有意义
    watchOptions: {
        // 默认为空,不监听的文件或者文件夹，支持正则匹配
        ignored: /node_modules/,
        // 监听到的变化发生后会等300ms再去执行，默认300ms
        aggregateTimeout: 300,
        // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒1000次
        poll: 1000
    }
}
```

## 热更新 webpack-dev-server
- Webpack Compile:将 js 编译成 Bundle
- HMR Server: 将热更新的文件输出给 HMR Runtime
- Bundle Server: 提供文件在浏览器的访问
- HMR Runtime: 会被注入到浏览器，更新文件的变化
- bundle.js: 构建输出的文件

## 文件指纹
> 打包后输出的文件名的后缀

- Hash
- ChunkHash
- ContentHash

### js 文件指纹设置
> 设置 output 的 filename，使用 chunckhash

### css 文件指纹设置
> 使用 mini-css-extract-plugin 插件，使用 contenthash

### 图片等文件压缩
> 设置 file-loader 使用 hash

```js
module.exports={
    entry:{
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    },
    module:{
        rules:[
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name: 'img/[name][hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: `[name][contenthash:8].css`
        })
    ],
} 
```

## 文件压缩

### js文件压缩
> 内置了 uglifyjs-webpack-plugin

### css文件压缩
> 使用 optimize-css-assets-webpack-plugin，同时使用cssnano


