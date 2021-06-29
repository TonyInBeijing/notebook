/**
 * proxy 代理
 */
let target = {
    isTarget: 1
};
let proxy = new Proxy(target, {
    get() {
        return "111"
    },
    set(target, key, value, receiver) {
        // target --传入的对象
        // key --修改对象的键名
        // value --修改对象的键值
        // receiver --接收修改值的对象
        console.log(arguments);
        target[key] = value;
    }
});
proxy.msg = "zhaowa";
console.log(proxy.msg);
console.log(target.msg);