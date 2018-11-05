import Vue from 'vue'
import Vuex from 'vuex'

// vuex全局变量状态管理
import user from './module/user' //用户信息
import permission from './module/permission' //权限路由

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        permission,
    },
    getters
});

export default store