/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 20:50:23
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 20:53:18
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/module/umdjs/umd.js
 * @Description: umd 规范
 * 
 */
(function (self, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        //* 当前环境是 CommonJS 规范环境
        module.exports = factory();
    }
    else if (typeof define === "function" && define.amd) {
        //* 当前环境是 AMD 规范环境
        define(factory);
    }
    else {
        //* 什么环境都不是，直接挂在全局对象上
        self.umdModule = factory();
    }
}, (this, function () {
    return function () {
        return Math.random();
    }
}))