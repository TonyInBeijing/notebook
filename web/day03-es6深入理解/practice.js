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
    processedParams = {...params}
    return processedParams;
}

function request() {
    const processedParams = requestParamsProcess(params);
    // 发送请求
}

