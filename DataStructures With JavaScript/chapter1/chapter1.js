/**
 * @description 变量的定义
 * 省略 var 关键字定义的变量自动拥有了全局作用域
 */

// 不省略 var
function showScopeWithVar() {
    var scope = "local";
    return scope;
}
var scope = "global";
console.log(scope); // "global"
console.log(showScopeWithVar()); // "local"

// 省略 var
function showScopeWithoutVar() {
    scope = "local";
    return scope;
}
scope = "global";
console.log(scope); // "global"
console.log(showScopeWithoutVar()); // "local"
console.log(scope); // "local"

/**
 * @description 递归 
 * 一个函数被递归调用时，在递归没有完成时，函数的计算结果暂时被挂起
 */
function factorial(number) {
    if (number === 1) {
        return number;
    }
    else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(5));