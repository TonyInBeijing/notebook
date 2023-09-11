/*
 * @Author: TonyInBeijing
 * @Date: 2023-09-09 14:30:07
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-09-09 14:30:57
 * @FilePath: /notebook/playground/src/prototype.js
 * @Description: 
 * 
 */
function Person() {
    this.name = "Tony";
};
Person.prototype = {
    say() {
        console.log(this.name);
    }
};

var person = new Person();

console.log(person.constructor);
console.log(person.__proto__);