/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 20:18:01
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 20:29:42
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/module/amdjs/moduleA.js
 * @Description: AMD模块 A
 * 
 */
define(function (require) {
    var moduleB = require("./moduleB");
    var newDate = moduleB += 1;
    return newDate;
});