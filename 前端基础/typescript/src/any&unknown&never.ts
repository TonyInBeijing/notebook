/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-30 20:19:34
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-30 22:39:26
 * @FilePath: /notebook/前端基础/typescript/src/any&unknown&never.ts
 * @Description: any unknown never 类型
 * 
 */

// TODO: any
// ! 需要在tsconfig.json 中设置 noImplicitAny: false

let foo; // any

function func(foo, bar) { }; // foo bar 隐式均为 any

// 1.显式指定为 any 类型的变量可以拥有任何类型的值
let anyVar: any = "";

anyVar = 1;
anyVar = true;
anyVar = {};
anyVar = [];
// 以上均不报错
// 2.标记为具体类型的变量也可以接受任何 any 类型的值
const var1: string = anyVar;
const var2: boolean = anyVar;
const var3: object = anyVar;
// 以上均不报错

// TODO: unknown
// 1.显式指定为 unknown 类型的变量可以再次赋值为其它类型

let unknownVar: unknown = "";
unknownVar = 1;
unknownVar = true;
unknownVar = {};
unknownVar = [];
// 以上均不报错

// 2.标记为具体类型的变量，只有 any 和 unknown 类型可以接受 unknown 类型的值
const var11: any = unknownVar;
const var21: unknown = unknownVar;
// const var31: string = unknownVar; // Error!

// TODO: never

function justThrow(): never {
    throw new Error();
};

const arr = [];
// arr.push(""); // 类型“string”的参数不能赋给类型“never”的参数。ts(2345)

export default {};