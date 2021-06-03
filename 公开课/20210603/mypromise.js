const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


class MyPromise {
    constructor(executor) {
        executor(this.resolve, this.reject);
    }
    status = PENDING;

    value = undefined;
    reason = undefined;


    successCallback = undefined;
    failedCallBack = undefined;

    resolve(value) {
        if (this.status !== PENDING) { return }
        this.status = FULFILLED;
        this.value = value;
        this.successCallback && this.successCallback(this.value);
    }
    reject(reason) {
        if (this.status !== PENDING) { return }
        this.status = REJECTED;
        this.reason = reason;
        this.failedCallBack && this.failedCallBack(this.reason);
    }
    then(successCallback, failedCallBack) {
        if (this.status === FULFILLED) {
            successCallback(this.value);
        }
        else if (this.status === REJECTED) {
            failedCallBack(this.reason);
        }
        else {
            this.successCallback = successCallback;
            this.failedCallBack = failedCallBack;
        }
    }
}

module.exports = MyPromise;