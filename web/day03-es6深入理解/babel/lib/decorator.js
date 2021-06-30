"use strict";

require("core-js/modules/es6.array.for-each.js");

require("core-js/modules/es6.object.keys.js");

require("core-js/modules/es6.array.reduce.js");

require("core-js/modules/es6.array.slice.js");

require("core-js/modules/es6.object.define-property.js");

require("core-js/modules/es6.function.bind.js");

require("core-js/modules/es6.object.get-own-property-descriptor.js");

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var defaultHandler = {
  get: function get(obj, propName) {
    return obj[propName];
  },
  set: function set(obj, propName, val) {
    obj[propName] = val;
  }
};

var Proxy = function Proxy(target, handler) {
  this.target = target;
  this.handler = handler;
  this.handler.get = this.handler.get || defaultHandler.get;
  this.handler.set = this.handler.set || defaultHandler.set;
};

Proxy.prototype.getTrap = function (propertyName) {
  return this.handler.get(this.target, propertyName);
};

Proxy.prototype.setTrap = function (propertyName, value) {
  this.handler.set(this.target, propertyName, value);
};

function globalGetInterceptor(object, propertyName) {
  if (object instanceof Proxy) {
    return object.getTrap(propertyName);
  }

  var value = defaultHandler.get(object, propertyName);

  if (typeof value === 'function') {
    return value.bind(object);
  } else {
    return value;
  }
}

function globalSetInterceptor(object, propertyName, value) {
  if (object instanceof Proxy) {
    return object.setTrap(propertyName, value);
  }

  defaultHandler.set(propertyName, value);
}

/**
 * @description decorator装饰器
 * 首先是一个函数
 * 接受target,key,descriptor三个参数
 * 可以修改descriptor做一些额外的逻辑
 */
// test
function test(target, key, descriptor) {// TODO
}

var Foo = (_class = /*#__PURE__*/function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [{
    key: "getFooById",
    value: function getFooById(id) {// TODO
    }
  }]);

  return Foo;
}(), (_applyDecoratedDescriptor(_class.prototype, "getFooById", [test], Object.getOwnPropertyDescriptor(_class.prototype, "getFooById"), _class.prototype)), _class);