/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-11 23:30:28
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-12 00:15:55
 * @FilePath: /notebook/playground/src/new.js
 * @Description: 手动实现一个 new 操作符
 * 
 */
function Person(name) {
    this.name = name;
};

var person1 = new Person("Tony");

function myNew(constructor, ...args) {
    var obj = Object.create(constructor.prototype); // 1.将 obj.__proto__ 指向构造函数
    constructor.apply(obj, args); // 2.将 this 指向从 myNew 改变成 obj，并执行 constructor 逻辑
    return obj;
};

var person2 = myNew(Person, "Lucy");

console.log(person2);