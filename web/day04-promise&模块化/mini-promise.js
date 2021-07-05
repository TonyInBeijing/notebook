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
        then: function (onFulFilled) {
            this.onFulFilled = onFulFilled;
        },
        _resolve: function _resolve(res) {
            this._status = "FULFILLLED";
            this.currentValue = res;
            this.onFulFilled(this.currentValue);
        }
    }
    global.Promise = Promise;
})(window);