/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-25 19:04:46
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-27 17:01:22
 * @FilePath: /notebook/爪哇教育笔记/day04-promise&模块化/promise-source.js
 * @Description: 手写一个 promise
 * 
 */
class MiniPromise {
    constructor(excutor) {
        this.status = "pending";
        this.result = null;
        this.fulfilledList = [];
        this.rejectedList = [];
        excutor(this.excuteResolve.bind(this), this.excuteReject.bind(this));
    }

    excuteResolve(param) {
        setTimeout(() => {
            console.log("param:::", param);
            if (this.status !== "pending") return;
            if (param instanceof MiniPromise) {
                param.then(value => { }, error => { });
            }
            this.status = "fulfilled";
            this.result = param;
            this.fulfilledList.forEach(func => func(param));
            this.fulfilledList = [];
        }, 0);
    }

    excuteReject(error) {
        if (this.status !== "pending") return;
        if (error instanceof MiniPromise) {
            error.then(value => { }, error => { });
        }
        this.status = "rejected";
        this.result = error;
        this.rejectedList.forEach(func => func(error));
        this.rejectedList = [];
    }

    then(onFulfilled, onRejected) {
        return new MiniPromise((resolve, reject) => {

            function getNextResolve(param) {
                if (typeof onFulfilled !== "function") {
                    resolve(param);
                }
                else {
                    const preResult = onFulfilled(param);
                    if (preResult instanceof MiniPromise) {
                        preResult.then(resolve, reject);
                    }
                    else {
                        resolve(preResult);
                    }
                }
            }

            function getNextReject(error) {
                if (typeof onRejected !== "function") {
                    reject(error);
                }
                else {
                    let preRes;
                    try {
                        preRes = onRejected(error);
                    } catch (e) {
                        reject(e);
                    }
                    if (preRes instanceof MiniPromise) {
                        preRes.then(resolve, reject);
                    }
                    else {
                        onRejected(preRes);
                    }
                }
            }
            switch (this.status) {
                case "pending":
                    this.fulfilledList.push(getNextResolve);
                    this.rejectedList.push(getNextReject);
                    break;
                case "fulfilled":
                    getNextResolve(this.result);
                    break;
                default:
                    break;
            }
        });
    }

    catch(onRejected) {
        this.then(null, onRejected);
    }

    static resolve(param) {
        if (param instanceof MiniPromise) {
            return param;
        }
        return new MiniPromise((resolve, reject) => {
            resolve(param);
        });
    }
    static reject(error) {
        if (error instanceof MiniPromise) {
            return error;
        }
        return new MiniPromise((resolve, reject) => {
            reject(error);
        })
    }
    static all(miniPromiseList) {
        return new MiniPromise((resolve, reject) => {
            let resultCount = 0;
            let totalResultList = [];
            miniPromiseList.forEach(promise => {
                MiniPromise.resolve(promise).then(
                    res => {
                        totalResultList.push(res);
                        resultCount++;
                        if (resultCount === miniPromiseList.length) {
                            resolve(totalResultList);
                        }
                    },
                    error => {
                        reject(error);
                    }
                );
            });
        });
    }
    static race(miniPromiseList) {
        return new MiniPromise((resolve, reject) => {
            miniPromiseList.forEach(promise => {
                MiniPromise.resolve(promise).then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
            });
        });
    }
}
