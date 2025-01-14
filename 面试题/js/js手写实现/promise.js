/*
 * @Author: TonyInBeijing
 * @Date: 2025-01-14 15:18:45
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2025-01-14 17:10:51
 * @FilePath: /notebook/面试题/js/js手写实现/promise.js
 * @Description: 
 * 
 */
class MyPromise {
    constructor(callback) {
        this.status = "pending";
        this.result = undefined;
        this.error = undefined;
        const resolve = val => {
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.result = val;
            }
        };
        const reject = err => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.error = err;
            }
        };
        try {
            callback(resolve, reject);
        } catch (error) {
            reject(error);
        }
    };

    then(onFulfilled, onRejected) {
        if (this.status === "fulfilled") {
            onFulfilled(this.result);
        }
        else {
            onRejected(this.error);
        }
    };
    catch(onRejected) {
        if (this.status === "rejected") {
            onRejected(this.error);
        }
    };
    finally() { }
}

MyPromise.resolve = function () { };
MyPromise.reject = function () { };
MyPromise.race = function () { };
MyPromise.all = function (promiseArr) {
    return new Promise((resolve, reject) => {
        let result = [];
        promiseArr.forEach(promise => {
            Promise.resolve(promise).then(res => {
                result.push(res);
                if (result.length === promiseArr.length) {
                    resolve(result);
                }
            }).catch(error => reject(error));
        });
    });
};
