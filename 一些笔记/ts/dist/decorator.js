"use strict";
/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-11 16:02:13
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-11 16:57:06
 * @FilePath: \notebook\一些笔记\ts\src\decorator.ts
 * @Description:
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description: 类装饰器工厂
 * @param {string} name
 * @return {*}
 */
const classDecoratorFactory = (constructor) => class extends constructor {
    constructor() {
        super(...arguments);
        this.name = "Alice";
        this.age = 30;
    }
};
/**
 * @description: 方法装饰器工厂
 * @param {string} name
 * @return {*}
 */
const functionDecoratorFactory = (name) => () => { console.log(name); };
let MyClass = class MyClass {
    constructor(name) {
        this.name = "aaa";
        this.age = 20;
        name = name;
    }
    sayName() {
        console.log(this.name, this.age);
    }
};
__decorate([
    functionDecoratorFactory("Bob")
], MyClass.prototype, "sayName", null);
MyClass = __decorate([
    classDecoratorFactory
], MyClass);
exports.default = MyClass;
