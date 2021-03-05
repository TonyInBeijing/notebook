// 1.定义promise的三个状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

// 2. promise构造函数
function Promise(execute) {
    var that = this;
    that.state = PENDING;
    function resolve(value) {
        if (that.state === PENDING) {
            that.state = FULFILLED;
            that.value = value;
        }
    }
    function reject(reason) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.reason = reason;
        }
    }
    try {
        execute(resolve, reject);
    }
    catch (e) {
        reject(e);
    }
}

// 3.实现then方法
Promise.prototype.then = function (onFulfilled, onRejected) {
    // 可选参数不为函数时应该被忽略
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : function (x) { return x; };
    onRejected = typeof onRejected === "function" ? onRejected : function (e) { throw e; };
    var that = this;
    var promise;
    if (that.state === FULFILLED) {
        promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    onFulfilled(that.value);
                }
                catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    if (that.state === REJECTED) {
        promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    onRejected(that.reason);
                }
                catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    if (that.state === PENDING) {
        promise = new Promise(function (resolve, reject) {
            that.onFulfilledFn.push(function () {
                try {
                    onFulfilled(that.value);
                }
                catch (reason) {
                    reject(reason);
                }
            });
            that.onRejectedFn.push(function () {
                try {
                    onRejected(that.reason);
                }
                catch (reason) {
                    reject(reason);
                }
            });
        });
    }
}