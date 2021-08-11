const { initState } = require('./state') // 初始化option中的 data、props、watch、methods、computed等

function initMixin(Vue) {
    // 在Vue原型上挂在_init函数
    Vue.prototype._init = function(option) {
        // 将Vue实例赋值给vm
        const vm = this

        /** 将options参数挂在倒Vue实例上
        * 注意：这就是为什么我们可以使用this.$options.data()来获取data初始值的原因
        * 应为vm.$options是原样存储所以可以用来重制data中的某些字段
        */
        vm.$options = options
        
        // 执行初始化状态函数
        initState(vm)
    }
}


// 倒出初始化函数
module.exports = {
    initMixin: initMixin
}
