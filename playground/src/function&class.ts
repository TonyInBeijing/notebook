/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-26 22:42:49
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-27 23:25:30
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

function bar3(name: string, ...rest: any[]) {

};

function bar4(name: string, ...rest: [number, string]) {

};

// * 重载

function overload(foo: number, bar: true): string; // 重载签名一

function overload(foo: number, bar?: false): number; // 重载签名二

function overload(foo: number, bar?: boolean): string | number {
    if (bar) {
        return String(foo);
    }
    else {
        return foo;
    }
}; // 实现签名

// * 异步函数，Generator 函数等类型签名

async function asyncFunc(): Promise<void> { };

function* genFunc(): Iterable<void> { };

async function* asyncGenFun(): AsyncIterable<void> { };

// * 类与类成员的类型签名

class MyClass1 {
    prop: string;

    constructor(inputProp: string) {
        this.prop = inputProp;
    };

    print(addOn: string): void {
        console.log(`${this.prop} and ${addOn}`);
    };

    get propA(): string {
        return `${this.prop} + A`;
    };

    set propA(value: string) {
        this.prop = `${value} + A`;
    };
}

const myClass1 = new MyClass1("prop");

myClass1.print(""); // prop and 
myClass1.propA = "prop2";
console.log(myClass1.propA); // prop + A + A

// * 修饰符

class MyClass2 {

    /**
     * @description private 只能在类的内部访问
     */
    // private prop: string;

    // 可以直接作为类的成员，不需要手动赋值
    constructor(private prop: string) {

    };

    /**
     * @description protected: 只能在类和子类中访问
     * @param addOn 
     */
    protected print(addOn: string): void {
        console.log(`${this.prop} and ${addOn}`);
    };

    /**
     * @description public 在类，类的实例，子类中都能访问
     */
    public get propA(): string {
        return `${this.prop} + A`;
    };

    public set propA(value: string) {
        this.prop = `${value} + A`;
    };

    /**
     * @description static 无法通过 this 来访问，需要通过 MyClass2.staticHandler 来调用
     * 静态成员直接被挂载在函数体上，实例成员被挂载在 prototype 上
     */
    static staticHandler(): void {
        console.log("This is a static func");
    };
};

// * 继承、实现、抽象类

/**
 * @description 基类
 */
class Base {
    print(): void {
        console.log("Base");
    }
};


/**
 * @description 派生类
 */
class Derived extends Base {
    print(): void {
        super.print();
    }
};


export default {};