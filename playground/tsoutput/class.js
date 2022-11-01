"use strict";
/*
 * @Author: TonyInBeijing
 * @Date: 2022-11-01 22:10:09
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-11-01 22:23:19
 * @FilePath: /notebook/playground/tsoutput/class.js
 * @Description: ts class 练习
 *
 */
var MyClass = /** @class */ (function () {
    function MyClass(prop) {
        this.prop = prop;
    }
    ;
    MyClass.prototype.printProp = function () {
        return this.prop;
    };
    ;
    MyClass.prototype.say = function () {
        return "hello";
    };
    ;
    Object.defineProperty(MyClass.prototype, "setVal", {
        set: function (value) {
            this.prop = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MyClass.prototype, "getVal", {
        get: function () {
            return this.prop + " get!";
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
