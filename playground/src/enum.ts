/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-26 21:38:34
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-26 22:05:56
 * @FilePath: /notebook/playground/src/enum.ts
 * @Description: 
 * 
 */

enum Items1 {
    Foo, // 0
    Bar, // 1
    Baz // 2
};

enum Items2 {
    Foo, // 0
    Bar = 2, // 2
    Baz // 3
};

// * 延迟枚举

const getNum: (() => number) = () => 1 + 2;

enum Items3 {
    Foo,
    Baz = 4,
    Bar = getNum()
};

console.log(Items3[4]);

export default {};

