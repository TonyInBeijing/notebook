/*
 * @Author: TonyInBeijing
 * @Date: 2025-01-20 16:42:14
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2025-01-20 17:07:39
 * @FilePath: /notebook/面试题/js/防抖&节流.js
 * @Description: 防抖&节流函数实现
 * 
 */

/**
 * @description 防抖函数：设置一个阈值，在阈值内多次调用函数只执行一次，重复调用会重置 time
 * @param {Function} fn 调用函数
 * @param {Number} time 阈值
 */
function debounce(fn, time) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time);
    };
}


/**
 * @description 节流函数：设置一个阈值，在阈值内多次调用函数只执行一次，重复调用不会重置 time
 * @param {Function} fn 调用函数
 * @param {Number} time 阈值
 */
function throttle(fn, time) {
    let start = Date.now();
    let timer = null;
    return function (...args) {
        let current = Date.now();
        if (current - start >= time) {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
            start = current;
        }
        else if (timer === null) {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, time);
        }
    }
}