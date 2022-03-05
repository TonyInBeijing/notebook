# Q1：如何理解 HTML 语义化?

> 参考链接：[如何理解HTML结构的语义化？](https://www.jianshu.com/p/6bc1fc059b51)

**HTML 语义化的核心是反对大篇幅的使用无语义化的 div + css + span，而鼓励使用 HTML 定义好的语义化标签。**

- 让人更容易读懂（增加代码可读性）
- 让搜索引擎更容易读懂，有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重（SEO）
- 在没有 css 样式的情况下，页面也能呈现出很好的内容结构和代码结构

## Q：怎么做？

- 尽可能少的使用无语义的标签div和span；

-  在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；

-  不要使用纯样式标签，如：b、font、u等，改用css设置。

-  需要强调的文本，可以包含在strong或em标签中，strong默认样式是加粗（不要用b），em是斜体（不要用i）；

-  使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；

- 表单域要用fieldset标签包起来，并用legend标签说明表单的用途；demo

- 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。

- 补充一点：不仅写html结构时，要用语义化标签，给元素写css类名时，也要遵循语义化原则，不要，随便起个名字就用，那样等以后，再重构时，非常难读。最忌讳的是不会英文，用汉语拼音代替。别那么LOW 。



# Q2：script 标签中 defer 和 async 的区别?

- script 会阻断 html 解析，当脚本下载并执行完毕后才会继续解析 html
- script async 异步下载脚本，下载完成后立即执行，有可能会阻断 html 的解析
- script defer 不会阻断 html 解析，解析完成后按顺序执行脚本

# Q3：从输入 url 到看到页面发生了什么（经典必看）

> 参考链接：
> [史上最详细的经典面试题 从输入URL到看到页面发生了什么？](https://juejin.cn/post/6844903832435032072)
> [从URL输入到页面展现到底发生什么？](https://juejin.cn/post/6844903784229896199)

1. DNS 解析域名
2. TCP 三次握手建立连接
3. 客户端发送 HTTP 请求
4. 服务端处理请求并返回 HTTP 报文
5. 浏览器解析并渲染页面
6. TCP 四次挥手，连接结束

 ## 什么是 url ?

URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址

scheme://host.domain:port/path/filename?abc=123#456

- scheme: 协议类型，常见的有 http,https,file,ftp
- host: 定义域主机，http默认主机是 www
- domain: 定义域名
- port: 定义端口号, http默认端口号80，https是443
- path: 定义文件路径
- filename: 定义文档/资源名称
- query: 查询参数，上面的 abc=123
- fragment: 锚点， #456

## DNS 解析域名

## TCP 三次握手和四次挥手


