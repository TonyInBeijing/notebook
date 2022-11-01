/*
 * @Author: TonyInBeijing
 * @Date: 2022-11-01 22:10:09
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-11-01 22:23:15
 * @FilePath: /notebook/playground/src/class.ts
 * @Description: ts class 练习
 * 
 */

class MyClass {
    private prop: string;
    constructor(prop: string) {
        this.prop = prop;
    };

    public printProp(): string {
        return this.prop;
    };

    protected say(): string {
        return "hello";
    };

    set setVal(value: string) {
        this.prop = value;
    };

    get getVal(): string {
        return this.prop + " get!";
    }
}
