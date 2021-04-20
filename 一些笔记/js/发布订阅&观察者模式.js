/**
 * @description 发布订阅&观察者模式 实现
 */

// 简单实现发布订阅
const e = {
    callbackList: [],
    // 订阅
    on(key, callback) {
        this.callbackList.push({
            key,
            callback
        });
    },
    // 发布
    emit(key, value) {
        this.callbackList.forEach(obj => {
            if (obj.key === key) {
                // once方法
                if (obj.isOnce) {
                    obj.callback(value);
                    obj.flag = false;
                }
                // on方法
                else {
                    obj.callback && obj.callback(value);
                }
            }
            else {
                return false;
            }
        });
    },
    // 取消订阅
    off(key) {
        this.callbackList.forEach(obj => {
            if (obj.key === key) {
                obj.callback = null;
            }
        });
    },
    // 只订阅一次
    once(key, callback) {
        this.callbackList.push({
            key,
            callback,
            isOnce: true,
            flag: true
        });
    }
};

// 观察者模式
class Subject {
    constructor(name) {
        this.name = name;
        this.state = 'initState';
        // 观察者列表
        this.observerList = [];
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    setState(state) {
        // 修改state
        this.state = state;
        // 通知观察者
        this.observerList.forEach(observer => {
            observer.update(this);
        });
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(subject) {
        console.log(subject.name + '的state是' + subject.state);
    }
}
const subject = new Subject('嘻嘻');
const observer1 = new Observer('哈哈');
const observer2 = new Observer('嘿嘿');
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.setState('changeState');