/**
 * @description js函数式编程
 * @author YHW 2021-09-06
 */

// 维基百科定义：函数式编程（英语：functional programming），又称泛函编程，是一种编程范式，它将电脑运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。

// 纯函数：当一个函数的输出不受外部环境影响，同时也不影响外部环境时，该函数就是纯函数

// 纯函数
var xs = [1, 2, 3, 4, 5];
xs.slice(0, 3); // [1,2,3]
xs.slice(0, 3); // [1,2,3]
xs.slice(0, 3); // [1,2,3]

// 非纯函数
xs.splice(0, 3); // [1,2,3]
xs.splice(0, 3); // [4,5]
xs.splice(0, 3); // []

// 函数柯里化
// curry的概念很简单：将一个低阶函数转换为高阶函数的过程就叫柯里化

// f(arg1,arg2,arg3) => f(arg1)(arg2)(arg3)f
//                      f(arg1,arg2)f(arg3)
//                      f(arg1)(arg2,arg3)

// var add = (x,y) => x + y;
// es5写法
var add = function (x) {
    return function (y) {
        return x + y;
    }
};
// es6写法
var add = x => (y => x + y);

// 例子
var addOne = add(1);
var addTen = add(10);
addTen(2); // 12


var checkAge = x => (y => y > x);

var checkAge18 = checkAge(18);

console.log(checkAge18(20));

// 函数组合

// 普通版本
var toUpperCase = x => x.toUpperCase();
var exclaim = x => x + '!';

var shout = x => toUpperCase(exclaim(x));

console.log(shout("xx"));

// 柯里化
// 定义一个compose
var compose = function (...args) {
    return function (x) {
        return args.reduceRight(function (value, item) {
            return item(value);
        }, x);
    }
}
var shout = compose(toUpperCase, exclaim);
console.log(shout("xx"));
