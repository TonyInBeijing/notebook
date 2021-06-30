/**
 * @description async & await异步
 */
// promise异步
(new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(111);
    }, 1000);
})).then(res => {
    console.log(res);
});

// async+await
function request() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(111);
        }, 1000);
    });
}


async function a() {
    const res = await request();
    console.log(res);
}
a();

console.log("outer"); // 主线程不会被阻塞