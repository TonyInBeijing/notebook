/*
 * @Author: TonyInBeijing
 * @Date: 2023-09-09 15:48:10
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-09-09 16:03:21
 * @FilePath: /notebook/playground/src/extends.js
 * @Description: JS 继承的几种方式
 * 
 */
//* 1.原型链继承
// function Parent(name) {
//     this.name = name;
//     this.action = ["sing", "jump", "rap"];
// };
// Parent.prototype = {
//     say() {
//         console.log(this.name);
//     }
// };

// function Child() { };
// Child.prototype = new Parent("Tony");

// var child1 = new Child("Mary");
// var child2 = new Child("Jack");
// console.log(child1.name);  // Tony
// child1.action.push("basketball");
// console.log(child1.action === child2.action); // true

//! 缺陷：
//! 1.无法正确获取参数
//! 2.当构造函数上有引用类型时，一改全改

//* 2.构造函数继承
// function Parent(name) {
//     this.name = name;
//     this.action = ["sing", "jump", "rap"];
// };
// Parent.prototype = {
//     say() {
//         console.log(this.name);
//     }
// };

// function Child() {
//     Parent.apply(this, arguments);
// };

// var child1 = new Child("Mary");
// var child2 = new Child("Jack");
// console.log(child1.name);  // Mary
// child1.action.push("basketball");
// console.log(child1.action === child2.action); // false
// child1.say(); //! child1.say is not a function 

//! 缺陷：
//! 1. 浪费内存 - 每次创建一个新的实例，都会执行一次 Parent.apply() 方法，创建了很多变量
//! 2. prototype 上的方法没有被继承

//*3 组合继承（原型链+构造函数）
function Parent(name) {
    this.name = name;
    this.action = ["sing", "jump", "rap"];
};
Parent.prototype = {
    say() {
        console.log(this.name);
    }
};

function Child() {
    Parent.apply(this, arguments);
};

Child.prototype = new Parent(); // constructor 被覆盖了
Child.prototype.constructor = Child;

var child1 = new Child("Mary");
var child2 = new Child("Jack");
console.log(child1.name);  // Mary
child1.action.push("basketball");
console.log(child1.action === child2.action); // false
child1.say(); //! child1.say is not a function 