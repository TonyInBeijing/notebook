"use strict";

require("core-js/modules/es6.function.bind.js");

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
 * proxy 代理
 */
var target = {
  isTarget: 1
};
var handler = {
  get: function get() {
    return 111;
  },
  set: function set(target, key, value, receiver) {
    // target --传入的对象
    // key --修改对象的键名
    // value --修改对象的键值
    // receiver --接收修改值的对象
    globalGetInterceptor(console, "log")(arguments);
    globalSetInterceptor(target, "key", value);
  }
};
var proxy = new Proxy(target, handler);
globalSetInterceptor(proxy, "msg", "zhaowa");
globalGetInterceptor(console, "log")(globalGetInterceptor(proxy, "msg"));
globalGetInterceptor(console, "log")(globalGetInterceptor(target, "msg"));