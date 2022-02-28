"use strict";
/**
 * @description 对象类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
// 良好的代码提示
let r = new Person("tony", 26, "male");
console.log(r);
exports.default = {};
