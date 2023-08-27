/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-27 21:09:15
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 21:50:15
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

