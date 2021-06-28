/**
 * @description es6 & esNext
 */
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function (func) {
    func(); //输出10次10 var变量提升，执行时取外层作用域
});

for (var i = 0; i < 10; i++) {
    funcs.push((function (i) { console.log(i) })(i));
}
funcs.forEach(function (func) {
    func(); //输出0-9 闭包缓存
});

// 扩展运算符
// 入参
function add(a, b, c) {
    return a + b + c;
}
var param = [1, 2, 3];
add(...param); // 6

// 形参
function compute(numbers) {
    add.apply(null, numbers);
}
compute([1, 2, 3]); // 6


function add(...numbers) {
    console.log(numbers);
}
add(1, 2, 3); //[1,2,3]

// 扩展对象的方法
const key = 'myKey';
const demo = {
    [key]: 'key'
};
console.log(demo[key]);

// object.assign();
var params = {
    url: 'http://www.taobao.com',
    method: 'get'
}
function requestParamsProcess(params) {
    params.method = params.method.toUpperCase(); // 修改了引用产生不可预知的错误
    // Object.assign();
    let processedParams = {};
    Object.assign(processedParams, params);
    // 使用扩展运算符实现
    processedParams = { ...params }
    return processedParams;
}
function request() {
    const processedParams = requestParamsProcess(params);
    // 发送请求
    // axios.post()
}


// Object.assign()
// 不改引用
var params = {
    count: 0
};

var mergedParams = Object.assign({}, params);
mergedParams.count++;
console.log(params.count, mergedParams.count); // 0,1

/**
 * Set
 */
let set = new Set([1, 1, 2, 3, 3, 3, 4]);
console.log(setArray); // Set {1,2,3,4}

// class
// es6
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
    static staticFunc() {
        console.log("111");
    }
}
// es5
function PersonClass() {

}
function constructor(name) {
    this.name = name;
}
PersonClass.prototype = {
    constructor,
    sayName() {
        console.log(this.name);
    }
}
PersonClass.staticFunc = function () {
    console.log("222");
}

// promise

function start() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(111) }, 1000);
    });
}
start().then(res => {
    console.log("res-1::", res);
    return 222;
}).then(res2 => {
    console.log("res-2::", res2);
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(444) }, 1000);
    });
}).then(res3 => {
    console.log("res-3::", res3); // 444 当上一个then返回一个新的Promise对象，当前then的res是新的Promise的返回值
    var newPromise = new Promise((resolve, reject) => {
        setTimeout(resolve(666));
    });
    return newPromise.then(res => {
        return 777;
    });
}).then(res4 => {
    console.log("res-4::", res4); // 777 同理
    throw new Error("Error!");
}).then(res5 => {
    console.log("res-5::", res5);
}).catch(e => {
    console.log("Error-1::", e); // 不执行res5的then，直接跳到catch
    return 666;
}).then(res6 => {
    console.log("res-6::", res6); // catch兜住一次错误，后面的then继续执行
});


// promise.all

let p1 = new Promise(resolve => {
    resolve(1);
});
let p2 = new Promise(resolve => {
    resolve(2);
});
let p3 = new Promise(resolve => {
    resolve(3);
});

let p4 = Promise.all([p1, p2, p3]); // p4也是一个Promise对象
p4.then(([p1res, p2res, p3res]) => {
    console.log(p1res, p2res, p3res); // 1,2,3 p1,p2,p3都决议以后执行
});


// promise.race
let firstPromise = new Promise(resolve => {
    setTimeout(resolve(1), 1000);
});
let lastPromise = new Promise(resolve => {
    setTimeout(resolve(2), 2000);
});
let resPromise = Promise.race([firstPromise, lastPromise]);
resPromise.then(firstRes => {
    console.log(firstRes); // 1 有一个Promise决议后就执行
});