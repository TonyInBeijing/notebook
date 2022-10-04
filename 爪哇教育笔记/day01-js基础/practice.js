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

// 1.函数直接调用时
function myfunc() {
    console.log(this);
}
myfunc(); // Window

// 2.函数被别人调用时
function myfunc() {
    console.log(this);
}
var a = {
    func: myfunc
};
a.func(); // a

// 3.new一个实例
function Person(name) {
    this.name = name;
    console.log(this.name);
}
var person = new Person('xxx');
console.log(person.name); // xxx this指向person，new出来的实例

// 4.call,apply,bind
function func() {
    console.log(this.name);
}

var person1 = {
    name: 'xxx',
    func: func
};

var person2 = {
    name: 'yyy',
    func: func
}

// this指向person2
person1.func.call(person2); // yyy 
person1.func.apply(person2); // yyy 
(person1.func.bind(person2))(); // yyy 

/**
 * call,apply,bind有什么区别
 * call 立即执行 object.call(obj,arg1,arg2,arg3)
 * apply 立即执行 object.apply(obj,[arg1,arg2,arg3])
 * bind 返回值为一个函数，不会改变原函数的this指向
 */

// 5.箭头函数
function func() {
    console.log(this.name);
    return () => {
        // 箭头函数里的this指向函数词法作用域外面的this
        console.log(this.name);
    }
}

var person1 = {
    name: 'xxx',
    func: func
};
var person2 = {
    name: 'yyy',
    func: person1.func()
};
person1.func(); // xxx 在定义中往上找this
person2.func(); // xxx 同上

// 练习题
function show() {
    console.log(this);
}
var obj = {
    show: function () {
        console.log(this);
    }
}
(0, obj.show)(); // window 
// 逗号表达式返回最后一项 obj.show 等于 function(){console.log(this)},执行此方法返回 Window
var obj = {
    sub: {
        show: function () {
            console.log(this);
        }
    }
};
obj.sub.show(); // sub
var elem = document.getElementById("id");
elem.addEventListener('click', obj.show); // window
elem.addEventListener('click', obj.show.bind(obj)); // obj
elem.addEventListener('click', function () { obj.show() }); // obj