/**
 * @description 实现一个vue-router
 */

let KVue;


class KVueRouter {
    constructor(options) {
        this.$options = options;
        // 设置路由初始值
        const initial = window.location.hash.slice(1) || "/";
        // 响应式数据
        KVue.util.defineReactive(this,"current",initial);
        // 监听事件
        window.addEventListener("hashchange", this.onHashChange.bind(this));
    }
    // 将#后面的赋值给current
    onHashChange() {
        this.current = window.location.hash.slice(1);
        console.log(this.current);
    }
}
// 行参是Vue的构造函数
KVueRouter.install = function (Vue) {
    // 保存构造函数
    KVue = Vue;
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
            // 获取路由表
            // 1.获取路由实例
            const routes = this.$router.$options.routes;
            const current = this.$router.current;
            const route = routes.find(route => route.path === current);
            const comp = route ? route.component : null;
            return h(comp);
        }
    });
}

export default KVueRouter