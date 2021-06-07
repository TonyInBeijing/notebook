# 如何配置babel
- 安装node.js,执行```npm init```，然后生成package.json文件
- 执行 ```npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest``` 
- 创建并配置 ```.babelrc``` 文件，存放在根目录下
- 执行```npm install -g babel-cli```
- 执行```babel /src/index.js```

```
// .babelrc基础配置
{
    "presets": ["es2015","latest"],
    "plugins": []
}
```