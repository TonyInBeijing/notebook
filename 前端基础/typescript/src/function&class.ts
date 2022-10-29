/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-26 22:42:49
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-29 10:44:31
 * @FilePath: \notebook\前端基础\typescript\src\function&class.ts
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
     * 所以静态成员只属于当前这个类或者子类，无法被实例继承，实例成员可以通过 prototype 一直传递下去
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
    // print(): void {
    //     super.print();
    // }

    // ! ts 4.3 新增了 override 来确保基类中一定存在派生类需要重写的方法
    override print() {

    }
};

/**
 * @description 抽象类 对类的结构和方法的抽象
 * 描述了一个类中应该有哪些成员（属性，方法）等
 * 抽象方法描述了在实际实现中的结构
 */
abstract class AbsClass {
    abstract absProp: string;
    abstract get absGetter(): string;
    abstract absMethod(name: string): string;
};

class MyClass3 implements AbsClass {
    absProp: string;
    constructor(prop: string) {
        this.absProp = prop;
    };

    get absGetter(): string {
        return this.absProp;
    };

    absMethod(name: string): string {
        return "";
    };
};

// ! typescript 中无法实现静态的抽象成员

// 也可以使用接口实现
interface MyClassStuct {
    absProp: string;
    get absGetter(): string;
    absMethod(name: string): string;
};

class MyClass4 implements MyClassStuct {
    absProp: string;
    constructor(prop: string) {
        this.absProp = prop;
    };

    get absGetter(): string {
        return this.absProp;
    };

    absMethod(name: string): string {
        return "";
    };
};

// 最后也可以使用 Newable Interface 实现

class MyClass5 {

};

interface MyClass5Struct {
    new(): MyClass5
};

declare const NewableMyClass5: MyClass5Struct;

const myClass5 = new NewableMyClass5();




export default {};