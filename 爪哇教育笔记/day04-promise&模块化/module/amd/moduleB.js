/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 20:19:02
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 20:20:09
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/module/amdjs/moduleB.js
 * @Description: AMD 模块 B
 * 
 */
define(function (require) {
    var timeStamp = new Date().getTime();
    return timeStamp;
});