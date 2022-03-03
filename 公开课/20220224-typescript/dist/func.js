"use strict";
/**
 * @description 方法类型
 */
// void - 当函数没有返回数据，返回类型就是 void
function test() {
    console.log("test");
}
;
// never - 函数肯定执行不完的时候返回类型就是 never
function error(message) {
    throw new Error(message);
}
// 带参数和返回值的函数,
function test2(name, age) {
    return `name 的值为 ${name},age 的值是 ${age}`;
}
console.log(test2("小明", 22));
