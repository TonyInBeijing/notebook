function say() {
    console.log(this);
}

// 直接调用，this 指向 window（浏览器）/ global（node）
setTimeout(() => {
    say(); // global
}, 1000);

// 2.被对象调用
var caller = {
    fn: say
}

caller.fn(); // caller 被谁调用就指向谁

// 3. new 
function Person(name) {
    this.name = name;
    this.say = function () {
        console.log(this.name);
    }
}

var person1 = new Person("Tony");
person1.say(); // Tony this 指向 new 出来的实例

// 4. call,apply,bind
var person2 = new Person("Mary");
var person3 = new Person("Jack");
var person4 = new Person("Lucy");

person1.say.call(person2); // Mary call 显式改变this指向
person1.say.bind(person2).call(person3); // Mary
person1.say.bind(person3).apply(person4); // Jack