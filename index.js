const { initMixin } = require('./init') // 引入初始化函数

// 创建vue构造函数
function Vue(options) {
    // 初始化传进来的option配置
    this._init(options)
}

// 配置Vue构造函数，这样有利于代码分割 
// 上面的_init方法由此而来
initMixin(Vue)

