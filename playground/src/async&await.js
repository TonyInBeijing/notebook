/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-12 13:29:19
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-12 13:35:33
 * @FilePath: /notebook/playground/src/async&await.js
 * @Description: 异步执行顺序面试题
 * 
 */
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('scriptstart');
setTimeout(function () {
    console.log('setTimeout')
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');

// scriptstart
// async1 start
// async2
// promise1
// script end
// async1 end
// promise 2
// settimeout