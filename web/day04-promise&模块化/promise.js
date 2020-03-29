function Promise(callback) {
    this._status = 'pending';
    callback(
        // resolve
        res => {
            this._resolve(res);
        },
        // reject
        err => {
            this._reject(err);
        }
    );
}
Promise.prototype = {
    constructor: Promise,
    // 定义一个总的回调函数，返回一个新的 promise
    // 接收3个参数：当前resolve的值，当前 then 的回调函数，
    _totalCallback: function(resolveParam, thenCallback, nextPromise) {
        // 执行当前 then(resolveParam => {});拿到返回值
        var preResult = thenCallback(resolveParam);
        if (preResult instanceof Promise) {
            // 如果返回值是一个 promise，继续往下执行promise，返回一个promise
            preResult.then(res => {
                nextPromise._resolve(res);
            });
            return;
        }
        // 如果返回值不是一个 promise，那么将 preResult 返回出去 供下个then调用
        return nextPromise._resolve(preResult);
    },
    _resolve: function(resolveParam) {
        // 改变 _status 状态
        this._status = 'fulfilled';
        // 把 resolve方法返回值记录下来，给 then 方法的返回值
        this.resolveParam = resolveParam;
        // 如果 resolve 中有异步操作
        // 那么等 resolve 异步结束后 调用 this.thenCallback
        // 例如直接 resolve(1);
        if (this.thenCallback) {
            this._totalCallback(this.thenCallback, this.resolveParam, this.nextPromise);
        }
    },
    _reject: function() {

    },
    then: function(thenCallback) {
        // 记录一下 then 的回调函数
        // 如果 resolve 中有异步操作
        // 那么等 resolve 异步结束后 调用 this.thenCallback
        this.thenCallback = thenCallback;
        // then 必然返回 一个 new Promise，无论决议与否
        this.nextPromise = new Promise((resolve, reject) => {});
        // 判断 _status
        if (this._status === 'fulfilled') {
            this._totalCallback(this.resolveParam, this.thenCallback, this.nextPromise);
        }
        // 如果没有 resolve，返回一个状态为 pending 的promise
        return this.nextPromise;
    },
    catch: function() {

    }
};