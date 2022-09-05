"use strict";

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reverse.js");

var _dec, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  },
    desc
  );
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

/*
 * @Author: TonyInBeijing
 * @Date: 2022-08-31 23:10:05
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-08-31 23:11:53
 * @FilePath: /notebook/playground/src/decorator.js
 * @Description: 
 * 
 */
const sayName = () => {
  console.log("Hello,my name is Tony");
};

let Person = (
  _dec = sayName(),
  (
    _class = class Person {
      constructor(name) {
        this.name = name;
      }

      say() {
        console.log(this.name);
      }

    },
    (_applyDecoratedDescriptor(_class.prototype, "say", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "say"), _class.prototype)),
    _class
  )
);
new Person("Jack").say();