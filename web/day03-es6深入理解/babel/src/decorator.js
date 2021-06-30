/**
 * @description decorator装饰器
 * 首先是一个函数
 * 接受target,key,descriptor三个参数
 * 可以修改descriptor做一些额外的逻辑
 */

// test
function test(target, key, descriptor) {
    // TODO
}
class Foo {
    @test
    getFooById(id) {
        // TODO
    }
}
