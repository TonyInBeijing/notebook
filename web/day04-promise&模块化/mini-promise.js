/**
 * @description 手写一个promise
 */
(function (global) {
    function Promise(processor) {
        this._status = "PENDING";
        processor(
            res => {
                this._resolve(res);
            },
            () => {
                this._status = "REJECTED";
            }
        );
    }
    Promise.prototype = {
        constructor: Promise,
        _taskCallback: function (value, processor, next) {
            var preResult = processor(value);
            if (preResult instanceof Promise) {
                preResult.then(res => {
                    next._resolve(res);
                });
                return;
            }
            return next._resolve(preResult);
        },
        then: function (onFulFilled) {
            this.onFulFilled = onFulFilled;
            this.next = new Promise((resolve, reject) => { });
            if (this._status === "FULFILLED") {
                this._taskCallback(this.currentValue, this.onFulFilled, this.next);
            }
            return this.next;
        },
        _resolve: function _resolve(res) {
            this._status = "FULFILLED";
            this.currentValue = res;
            if (this.onFulFilled) {
                this._taskCallback(res, this.onFulFilled, this.next);
                // this.onFulFilled(this.currentValue);
            }

        }
    }
    global.Promise = Promise;
})(window);