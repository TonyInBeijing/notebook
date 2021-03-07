/**
 * @description day1练习（部分伪代码）
 */

// 代码执行阶段的主要的工作是：
// 1.分配变量、函数的引用
// 2.执行代码

// 例子
function demo(num) {
    var name = "xxx";
    var getData = function getData() { };
    function c() { }
}
demo(100);

// 创建过程大致是
executionContext = {
    scopeChain: { ...},
    variableObject: {
        arguments: {
            // 创建了参数对象
            0: 100,
            length: 1,
        },
        num: 100, // 创建行参名称，赋值/创建引用拷贝
        c: 'pointer to function c()', // 有内部函数声明的话，创建引用指向函数体
        name: undefined, //有内部声明变量a，初始化为undefined
        getData: undefined, //有内部声明变量b，初始化为undefined，

    },
    this: { ...},
};

// 代码执行阶段 -- 在这个阶段主要是赋值并执行代码
executionContext = {
    scopeChain: { ...},
    variableObject: {
        arguments: {
            0: 100,
            length: 1,
        },
        num: 100,
        c: 'pointer to function c()',
        name: 'xxx', // 分配变量，赋值
        getData: 'pointer to function getData()',// 分配函数的引用，赋值
        this: { ...}
    }
};

// 作用域
function outer() {
    var person = 'yuanxin';
    function inner() {
        console.log(person);
    }
    return inner();
}
var inner = outer();
function execution() {
    var person = 'xiaowa';
    inner();
}
execution();// 'yuanxin'

/**
 * 闭包: 一个函数访问另一个函数中的变量
 */
function outer() {
    var person = 'xiaowa';
    function inner() {
        console.log(person);
    }
    return inner;
}
var inner = outer();
// eg.
function Person() {
    var _attackValume = 100;
    return {
        attack: function (body) {
            body.blood = this._attackValume - body.defense
        }
    };
};
var person = new Person();
console.log(person._attackValume); // undefined

/**
 * this
 */
var person = {
    name: 'xiaowa',
    execution() {
        console.log(this.name);
    }
};
person.execution(); // xiaowa