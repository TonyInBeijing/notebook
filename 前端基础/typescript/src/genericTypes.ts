/*
 * @Author: TonyInBeijing
 * @Date: 2022-11-14 21:34:00
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-11-14 22:22:12
 * @FilePath: \notebook\前端基础\typescript\src\genericTypes.ts
 * @Description: 泛型
 * 
 */


type Factory<T> = T | number | string;
// 伪代码
// function Factory(typeArg) {
//     return [typeArg, number, string];
// }

// TODO: 将 T 中所有属性类型设置为 string
type Stringify<T> = {
    [k in keyof T]: string
};

// TODO: 完全复制 T 中所有属性
type Clone<T> = {
    [k in keyof T]: T[k]
};

// TODO: T 中所有属性都变成
type Partical<T> = {
    [k in keyof T]?: T[k]
};

interface IFoo {
    name: string;
    age: number;
    sex: boolean
};

type ParticalFoo = Partical<IFoo>;

// 等价于
// interface ParticalFoo{
//     name?: string;
//     age?: number;
//     sex?: boolean
// }


// TODO: 条件类型
type IsEqual<T> = T extends true ? 1 : 2;

type A = IsEqual<true>; // 1
type B = IsEqual<false>; // 2
type C = IsEqual<"">; // 2

type DefaultFactory<T = boolean> = T | number | string;

// 使用
// const foo: DefaultFactory = true;

type ResStatus<ResCode extends number> = ResCode extends 10000 | 10001 | 10002 ? "success" : "failure";

type Res1 = ResStatus<10000>; // success
type Res2 = ResStatus<20000>; // failure
// type Res3 = ResStatus<"10000"> // 类型“string”不满足约束“number”。 

// TODO: 多泛型关联

type Conditional<Type, Condition, TruthyResult, FalsyResult> = Type extends Condition ? TruthyResult : FalsyResult;

//  "passed!"
type Result1 = Conditional<'linbudu', string, 'passed!', 'rejected!'>;

// "rejected!"
type Result2 = Conditional<'linbudu', boolean, 'passed!', 'rejected!'>;


export default {};