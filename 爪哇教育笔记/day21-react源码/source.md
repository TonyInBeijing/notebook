<!--
 * @Author: TonyInBeijing
 * @Date: 2023-09-11 09:09:49
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-09-11 09:10:07
 * @FilePath: /notebook/爪哇教育笔记/day21-react源码/source.md
 * @Description: React 源码分析
 * -->

# React v16 源码分析

> 具体版本 v16.13.1

## 1. React.createElement

> 源码地址：https://github.com/facebook/react/blob/v16.13.1/packages/react/src/ReactElement.js#L348

1. 为什么我们必须要在 `.jsx` 文件中 `import react` ？

   `jsx`会编译成 `React.createElement `,不引用 `react`会报错

2. 为什么有些属性无法从 `props` 设置？ 比如 `ref,key`
   `React.createElement`有 `key`,`ref`,`self`,`source`保留属性

## 2. 组件 Component

- **class component**
- **function component**
- **host component**

## 3. 渲染器 render

- **协调器 reconciler**
- **调度器 scheduler**
- **事件系统 events**

## 4. Fiber

- **能够让任务切片**

- **支持任务的可中断**

- **支持任务优先级**

- **FiberRootNode**

  `rootFiberNode` 可通过  `document.getElementById("root").__reactRootContainer._internalRoot `访问到

- **FiberNode**





