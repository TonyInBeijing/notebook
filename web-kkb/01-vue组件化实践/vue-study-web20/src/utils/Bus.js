//  模拟event bus实现
class Bus {
    constructor() {
        this.callbacks = {};
    }
    $on(name, func) {
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name].push(func);
    }
    $emit(name, args) {
        if (this.callbacks[name]) {
            this.callbacks.forEach(cb => cb(args));
        }
    }
}

// 在main.js中挂载
// Vue.prototype.$bus = new Bus();

// 在组件中使用
// this.$bus.$on("foo",msg=>{console.log(msg);}); // 111
// this.$bus.$emit("foo","111");