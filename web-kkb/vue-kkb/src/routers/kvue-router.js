/**
 * @description 实现一个vue-router
 */

// let KVue;


class KVueRouter {


}
// 行参是Vue的构造函数
KVueRouter.install = function (Vue) {
    // 保存构造函数
    // KVue = Vue;
    // 1.挂载一下$router
    Vue.mixin({
        beforeCreate() {
            // 全局混入，将来在组件实例化的时候才执行
            // 此时router实例已经存在了
            // this指的是组件实例
            if (this.$options.router) {
                // 挂载
                Vue.prototype.$router = this.$options.router;
            }
        }
    })
    // 2.实现两个全局组件
    Vue.component("router-link", {
        props: {
            to: {
                type: String,
                require: true
            }
        },
        // h是createElement函数
        // h是createElement
        // h(tag,props,children)
        render(h) {
            // 输出一个<a>
            return h("a", { attrs: { href: "#" + this.to } }, this.$slots.default);
        }
    });
    // router-view是一个容器
    Vue.component("router-view", {
        render(h) {
            return h("div", "view");
        }
    });
}

export default KVueRouter