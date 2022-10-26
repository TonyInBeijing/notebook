/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-26 22:42:49
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-26 22:48:38
 * @FilePath: /notebook/playground/src/function&class.ts
 * @Description: 
 * 
 */

// * 函数声明
const foo1 = (name: string): number => {
    return name.length;
}

type FuncFoo = (name: string) => number;

const foo2: FuncFoo = name => name.length;

// * void 类型
function foo3(): void { };
// 等同于
function foo4(): void {
    return;
}

// * 可选参数
function bar1(name: string, age?: number) {
    const inputAge = age || 18; // 或者 age ?? 18
    return name.length + inputAge;
};
// 或者
function bar2(name: string, age: number = 18) {
    const inputAge = age;
    return name.length + inputAge;
};





export default {};