/**
 * @description es6 & esNext
 */
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function (func) {
    func(); //输出10次10 var变量提升，执行时取外层作用域
});

for (var i = 0; i < 10; i++) {
    funcs.push((function (i) { console.log(i) })(i));
}
funcs.forEach(function (func) {
    func(); //输出0-9 闭包缓存
});