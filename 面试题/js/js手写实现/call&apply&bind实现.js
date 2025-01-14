/*
 * @Author: TonyInBeijing
 * @Date: 2023-05-10 14:34:30
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2025-01-14 15:18:27
 * @FilePath: /notebook/面试题/js/js手写实现/call&apply&bind实现.js
 * @Description: 
 * 
 */
Function.prototype.myCall = function (context, ...args) {
    // 第一个参数为null或者undefined时，this指向全局对象window/global，值为原始值的指向该原始值的自动包装对象，如String、Number、Boolean
    let cxt = context || global;
    // 将当前被调用的方法定义在cxt.func上（为了能以对象调用形式绑定this）
    // 为了避免函数名与上下文(context)的属性发生冲突，使用Symbol类型作为唯一值
    let func = Symbol();
    cxt[func] = this;
    args = args ? args : [];
    // 以对象调用形式调用func，此时this指向cxt 也就是传入的需要绑定的this指向
    const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
    // 删除该方法，不然会对传入对象造成污染
    delete cxt[func];
    return res;
}

Function.prototype.myApply = function (context, args = []) {
    let cxt = context || global;
    let func = Symbol();
    cxt[func] = this;
    const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
    return res
}

Function.prototype.myBind = function(context,...args){
    context.fn = this;
    return function(...args2){
        const result = context.fn(...args,...args2);
        delete context.fn;
        return result;
    };
};


// 测试
function sayTitle() {
    console.log(this.title);
}

global.title = "outerName";
var obj = {
    title: "innerName",
};

sayTitle.myCall();