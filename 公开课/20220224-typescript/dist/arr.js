"use strict";
/**
 * @description 数组和元组
 */
// number 类型
let arr1 = [1, 2, 3];
console.log(arr1);
// 等同于
let arr2 = [1, 2, 3];
console.log(arr2);
// 元组
let arr3 = [1, "a", true]; // 声明时长度固定为3
arr3.push(123); // 可以 push 但是不推荐
console.log(arr3);
// 任意类型数组
let arr4 = [1, "2", true];
let arr5 = [1, 2, "3", undefined];
