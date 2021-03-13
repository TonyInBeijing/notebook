/**
 * @description day02练习
 */

/**
 * -------------------------------------------------------创建对象的方法
 */
// 1.工厂模式
function personFactory(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}
var person1 = personFactory('xxx', 1);
var person2 = personFactory('yyy', 2);
// 2.构造函数模式
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var person1 = new Person('xxx', 1);
var person2 = new Person('yyy', 2);
//手写一个new函数(无prototype)
// 1.新建一个空对象 
var newPerson = {};
// 2.将构造函数中的作用域指向这个对象
var newPersonbinded = Body.bind(person3);
// 3.执行构造函数中的代码
newPersonbinded();
// 4.返回新对象
var person3 = newPerson;

// 3.原型模式
// 什么是原型
/**
 * 1.声明一个函数
 * function Body(){};
 * 2.浏览器创建prototype，它一个指针，指向一个对象，这个对象就是Body的原型
 * Body.prototype
 * 3.对象中增加一个constructor属性，指向Body这个函数
 * {constructor: Body}
 * 4.把prototype属性指向这个对象
 * Body.prototype = {constructor:Body};
 * 5.实例化一个对象，浏览器中支持访问对象的__proto__指向构造函数的prototy
 * var newBody = new Body();
 * newBody.__proto__ === Body.prototype
 */
function Body() { }
Body.prototype.age = 3;
var person = new Body();
console.log(person.age); // 3

// 手写一个new函数(prototype)
var newObj = {};
newObj.__proto__ = Body.prototype;
// 以上两步可以合并成 
// var newObj = Object.create(Body.prototype);
var person = newObj;

// 4.组合模式
// 把单独的属性放到构造函数中，把共有的属性（比如方法）放到prototype上
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    console.log('hello');
}
// 手写一个new函数（正式版）
function newOperation(constructorFunc) {
    var newObj = {};
    newObj.__proto__ = constructorFunc.prototype;
    var resObj = constructorFunc.call(newObj);
    return resObj;

    // 合并
    const newObj = Object.create(constructorFunc.prototype);
    constructorFunc.call(newObj);
    return newObj;
}
// 5.es6模式class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('hello');
    }
}


// -----------------------------------------继承