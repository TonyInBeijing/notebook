/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-17 10:25:51
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-17 15:02:52
 * @FilePath: /notebook/playground/src/closure.js
 * @Description: 闭包使用
 * 
 */
// 闭包的用处
// 1.私有变量
function Person() {
    var _name = "tony";
    return {
        sayHello: function (name) {
            console.log(`Hello ${name},I'm ${_name}`);
        }
    };
}

var person = new Person();

person.sayHello("Mary");
console.log(person._name);

// 2.储存数据
function dataManager() {
    var data = undefined;
    return {
        getData() {
            if (data === undefined) {
                return fetch("xxx").then(res => res.json());
            }
            else {
                return Promise.resolve(data);
            }
        }
    }
}

var result = dataManager().getData().then();