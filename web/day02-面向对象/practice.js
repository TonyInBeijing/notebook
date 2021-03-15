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
// 1.原型链方法
function Parent() {
    this.info = {
        age: 40,
        name: 'parent'
    };
}
Parent.prototype.say = function () {
    console.log('parent');
}
function Child() { }
Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();
console.log(child1.info.age); // 40
child1.say(); // parent
// 缺陷：一改全改 child1.info.age = 20; child2.info.age = 20;

// 特殊情况
function Parent() {
    this.age = 40;
    this.name = "parent";
}
function Child() { }
Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.age = 20;
child1.name = "child";
console.log(child1.age, child1.name); // 20,child
console.log(child2.age, child2.name); // 40,parent

// 因为child1.age = 20 给child1对象上挂载了age属性，name同理，并不会修改__proto__上的值
// 而child1.info.age 浏览器先寻找info属性，如果没有，则会去__proto__上寻找，所以修改了__proto__

// 2.借用构造函数继承
function Parent() {
    this.age = 40;
    this.name = "parent";
};
Parent.prototype.say = function () {
    console.log("Parent");
};
function Child() {
    Parent.call(this);
}
var child1 = new Child();
var child2 = new Child();

child1.name = "Child";
child1.age = 20;
console.log(child1.name, child1.age); // Child 20
console.log(child2.name, child2.age); // Parent 40
// 缺点：无法继承父类 prototype 上的属性
// 3.原型链和构造函数方式继承
function Parent() {
    this.age = 40;
    this.name = "parent";
};
Parent.prototype.say = function () {
    console.log("Parent");
};
function Child() {
    Parent.call(this);
}
Child.prototype = new Parent();
var child1 = new Child();
var child2 = new Child();

child1.name = "Child";
child1.age = 20;
console.log(child1.name, child1.age); // Child 20
console.log(child2.name, child2.age); // Parent 40

// 缺陷：当父类需要传参时
// function Parent(name){
//     this.name = name;
//     this.age = 40;
// }
// Child.prototype = new Parent(); 无法传参

// 4.寄生组合式继承
function Parent() {
    this.age = 40;
    this.name = "parent";
};
Parent.prototype.say = function () {
    console.log("Parent");
};
function Child() {
    Parent.call(this);
}
Child.prototype = Object.create(Parent.prototype);
var child1 = new Child();
var child2 = new Child();

child1.name = "Child";
child1.age = 20;
console.log(child1.name, child1.age); // Child 20
console.log(child2.name, child2.age); // Parent 40
child1.say(); // Parent

// 为什么不直接 Child.prototype = Parent.prototype ? 
// 修改Child.prototype,Parent.prototype也会被修改

// 5. es6继承
class Parent{
    constructor(){
        this.age = 40;
        this.name = "parent";
    }
    say(){
        console.log("parent");
    }
}
class Child extends Parent{
    constructor(){
        super();
        this.name = "child"
    }
    say(){
        console.log("child");
    }
}
var child1 = new Child();
console.log(child1.age,child1.name); // 40 child
child1.say(); // child 
