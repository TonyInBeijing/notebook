/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 19:16:55
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-04 15:25:42
 * @FilePath: \notebook\面试题\js\浅拷贝&深拷贝.js
 * @Description: 
 * 
 */
/**
 * @description 浅拷贝和深拷贝
 */
// 更明显显示文字
const show = text => text;
// -------------------------------------------- 浅拷贝
show(`含义:将内存中的某个对象复制一份,在内存中开辟一块新的空间,如果复制的这个对象的属性为基本数据类型        
,则拷贝的便为这个值本身,如果为复杂数据类型,则拷贝复制的为地址,因此,修改新对象会对原对象产
生影响`);
show('Object.assign实现')
let a = {
    number: 1
};
let b = Object.assign({}, a);
a.number = 2;
console.log(b.number); // 1
show('扩展运算符 ... 实现');
let c = { ...a };
a.number = 3;
console.log(c.number); // 2

// -------------------------------------------- 深拷贝
show(`深拷贝:开辟一块新的空间,完整的复制一份,包括复杂数据类型,拷贝的这个对象和原对象无任何关系,修改什么的都互不影响`);
show('实现深拷贝');