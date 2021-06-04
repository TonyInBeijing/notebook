/**
 * Generator状态机
 */
function* fun1() {
    console.log(666);
    let b = yield { name: "Tony", age: 18 };
    console.log(b);
    console.log(888);
}

// 函数返回遍历器对象
const generObj = fun1();
// 执行fun1内部代码
const back1 = generObj.next();
console.log(back1);
let back2 = generObj.next(back1.value);  // b=999
console.log(back2);