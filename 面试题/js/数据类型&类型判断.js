/**
 * @file 数据类型&类型判断笔记
 * @description 原文链接：https://juejin.cn/post/6947860760840110088#heading-6
 */

// 更明显显示文字
const show = text => text;

/**
 * 数据类型
 */

show('原始类型')
// boolean
const myBoolean = true;
// number
const myNumber = 1;
// string
const myString = '1';
// null
const myNull = null;
// undefined
const myUndefined = undefined;
// symbol
const mySymbol = Symbol(1);
// bigint
const myBigint = 1n;

// 对象类型
// Object
const myObject = new Object();
// Function
const myFunction = () => { };

// 类型判断
// typeof
show("原始类型除了null 都可以用 typeof 判断");
show("typeof null === 'Object'");
// instanceof
show("instanceof 内部通过原型链的方式来判断是否为构建函数的实例，常用于判断具体的对象类型。");
/**
 * 手写一个instanceof
 * @param type 需要判断的值类型
 * @param value 需要判断的值
 */
const myInstanceof = (type ,value) => {
    let protoType = Object.getPrototypeOf(type);
    while(true){
        if(protoType === null) return false;
        if(protoType === value.protoType) return true;
        protoType = Object.getPrototypeOf(protoType);
    }
}
show("最佳选择-Object.prototype.toString");
Object.prototype.toString.call(1); // '[object number]'

