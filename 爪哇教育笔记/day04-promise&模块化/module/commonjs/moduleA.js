/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 18:17:03
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 18:36:38
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/module/commonjs/moduleA.js
 * @Description: 模块 A
 * 
 */

const moduleB = require("./moduleB");

console.log("moduleB::", moduleB);

module.exports = moduleB;