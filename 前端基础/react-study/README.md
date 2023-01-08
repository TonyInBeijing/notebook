<!--
 * @Author: TonyInBeijing
 * @Date: 2023-01-04 21:03:32
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-01-08 22:47:03
 * @FilePath: /notebook/前端基础/react-study/README.md
 * @Description: 
 * 
-->
# React 学习项目


## 1.React 相关基础知识
JSX 元素节点会被 babel 编译成 React.createElement 语句，该 api 有三个参数
- 第一个参数：如果是组件类型，会传入组件对应的类或函数；如果是 dom 元素类型，传入 div 或者 span 之类的字符串。
- 第二个参数：一个对象，在 dom 类型中为标签属性，在组件类型中为 props 。
- 其他参数：依次为 children，根据顺序排列。

```javascript
// React
<div>
   <TextComponent />
   <div>hello,world</div>
   let us learn React!
</div>

// Babel 编译后
 React.createElement("div", null,
        React.createElement(TextComponent, null),
        React.createElement("div", null, "hello,world"),
        "let us learn React!"
    )
```
**JSX 转换规则**
| jsx元素类型	      | react.createElement 转换后 | type 属性   |
| ----------- | ----------- | ----------- |
| element元素类型      | react element类型	       |  标签字符串，例如 div        | 
| fragment类型   | react element类型        |  symbol react.fragment类型        |
| 文本类型   | 直接字符串	        |  无       |
| 数组类型	   | 返回数组结构，里面元素被react.createElement转换	        |  无        |
| 组件类型   | react element类型        |  组件类或者组件函数本身        |
| 三元运算 / 表达式	   | 先执行三元运算，然后按照上述规则处理	        |  看三元运算返回结果        |
| 函数执行		   | 先执行函数，然后按照上述规则处理		        |  看函数执行返回结果        |

## 2.React 相关面试题

### **老版本的 React 中，为什么写 jsx 的文件要默认引入 React?**

```javascript
import React from 'react'
function Index(){
    return <div>hello,world</div>
}
```

**Answer: 因为 jsx 在被 babel 编译后，写的 jsx 会变成 React.createElement 形式，所以需要引入 React，防止找不到 React 引起报错。**

## 
