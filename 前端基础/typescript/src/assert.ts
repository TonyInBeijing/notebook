/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-30 22:38:28
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-31 22:36:42
 * @FilePath: /notebook/前端基础/typescript/src/assert.ts
 * @Description: 类型断言
 * 
 */

// TODO： 断言基本语法  as NewType

let unknownVar: unknown;

(unknownVar as { foo: () => {} }).foo();


// * 双重断言

let str: string = "";

// (str as {handler: () => {}}).handler(); // 类型 "string" 到类型 "{ handler: () => {}; }" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"。ts(2352)

// 先断言为 unknown 
(str as unknown as { handler: () => {} }).handler();

// 使用尖括号断言
(<{ handler: () => {} }>(<unknown>str)).handler();


// * 非空断言（！）
declare const foo: {
    func?: () => ({
        prop?: number | null
    })
};

foo.func!().prop!.toFixed();


// * 代码提示辅助工具

interface IStruct {
    foo: string;
    bar: {
        barPropA: string;
        barPropB: string;
        barMethod: () => void;
        baz: {
            handler: () => Promise<void>;
        }
    };
};

// const obj:IStruct = {} // 报错
const obj = <IStruct>{}; // 不报错
