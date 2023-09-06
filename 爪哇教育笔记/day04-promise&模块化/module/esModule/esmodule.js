/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 21:09:15
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-29 21:36:19
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/module/esModule/esmodule.js
 * @Description: ES Module 模块化
 * 
 */
import obj from "./moduleA.js";
import * as moduleB from "./moduleB.js";
import moduleC from "./moduleC.js";


console.log("moduleA::", obj.name);
console.log("moduleB::", moduleB);
console.log("moduleC::", moduleC.name);

//!  如果使用了 ESModule： 必须使用 webpack 和 babel

