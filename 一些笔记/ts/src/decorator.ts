/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-11 16:02:13
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-11 16:59:13
 * @FilePath: \notebook\一些笔记\ts\src\decorator.ts
 * @Description: 
 * 
 */

/**
 * @description: 类装饰器工厂 
 * @param {string} name
 * @return {*}
 */
const classDecoratorFactory = <T extends { new(...args: any[]): {} }>(constructor: T) =>
    class extends constructor {
        name = "Alice";
        age = 30
    }

/**
 * @description: 方法装饰器工厂
 * @param {string} name
 * @return {*}
 */
const functionDecoratorFactory = (name: string): Function => (): void => { console.log(name); };


@classDecoratorFactory
export default class Person {
    name = "nobody";
    age = 20;
    constructor(name: string) {
        name = name;
    }
    @functionDecoratorFactory("Bob")
    sayName() {
        console.log(this.name, this.age);
    }
}
