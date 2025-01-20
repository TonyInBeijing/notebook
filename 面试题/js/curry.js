/*
 * @Author: TonyInBeijing
 * @Date: 2025-01-20 15:59:49
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2025-01-20 16:28:03
 * @FilePath: /notebook/面试题/js/curry.js
 * @Description: 函数柯里化
 * 
 */

//TODO: 柯里化： f(a,b,c) -> f(a)(b)(c)

const add = (a, b, c) => a + b + c;

add(1, 2) // 3
//* curriedAdd(1)(2) // 3

function curry_add(fn) {
    return function a(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            }
        }
    }
};

const result1 = curry_add(add)(1)(2)(3);
console.log(result1);

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const curriedAdd = curry(add);
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1)(2)(3));