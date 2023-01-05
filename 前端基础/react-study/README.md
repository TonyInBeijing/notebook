<!--
 * @Author: TonyInBeijing
 * @Date: 2023-01-04 21:03:32
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-01-05 23:15:02
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
