/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 18:31:07
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 20:27:19
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/module/amdjs/amd.js
 * @Description: AMD 模块 require
 * 
 */

// TODO: 需要引用符合 AMD 规范的库才能使用（e.g require.js）

require(["./moduleA", "./moduleB"], function (moduleA, moduleB) {
    console.log("moduleA:::", moduleA);
    console.log("moduleB:::", moduleB);
})