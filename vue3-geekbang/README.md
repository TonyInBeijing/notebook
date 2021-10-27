# 极客时间-玩转Vue3全家桶 学习笔记

## Vue3 新特性

### 1.响应式系统
```js
// Vue2
Object.defineProperty(obj,'title',{
    get(){},
    set(){}
})
```
> defineProperty无法对不存在的属性进行拦截，所以 Vue 2 中所有的数据必须要在 data 里声明
> 如果 title 是一个数组的时候，对数组的操作并不会改变 obj.title 的指向。对数组的长度的修改等操作无法实现拦截，需要额外的 $set 等 API

```js
// Vue 3
new Proxy(obj,{
    get(key){},
    set(key,value){}
})
```
> 虽然 Proxy 拦截 obj 这个数据，但 obj 具体是什么属性，Prxoy 则不关心，统一都拦截了。 而且 Proxy 还可以监听更多的数据格式，比如 Set、Map
> Proxy 存在一些兼容性问题，不兼容 IE11 以下的浏览器 

### Compisition API 

> Vue2 使用的 Options API的写法导致的问题：
- 所有的数据都挂载在 this 上，对 typescript 类型推导很不友好，也不好做 tree-shaking 清理代码
- 不再上下反复横跳，我可以把一个功能模块的 methods,data 都放在一起书写，维护更轻松
- 代码方便复用，可以把一个功能所有的 methods，data 封装在一个独立的函数里，复用代码非常容易
- Composition API 新增的 return 等语句，在实际项目中使用 <script setup> 特性可以清楚

### 新的组件
- Fragment
- Teleport 允许组件渲染在别的元素内，主要开发弹窗组件的时候特别有用
- Suspense 异步组件
  
### 新的打包工具 Vite
> 基于 es6 的 import 语法，在调试环境下，不需要全部预打包，只是把首页依赖的文件，依次通过网络请求去获取，整个开发体验得到巨大提升，做到了复杂项目的秒级调试和热更新