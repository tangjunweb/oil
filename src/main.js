// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global from './components/global';


import store from './store'
import {
  getToken,
  removeToken
} from './utils/utils'

import router from './router'
Vue.use(ElementUI);
Vue.use(global);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (token && token.token) {
    if (store.getters.roles.length === 0) {
      store.dispatch('SET_NAV').then(res => {
        next()
      }).catch(error => {
        next('/login');
      })
    } else {
      next()
    }



  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }

  }


})
// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     if (to.path === '/login') {
//       next({
//         path: '/'
//       });
//     }else{
//       next()
//     }
//   } else {
//     next('/login');
//   }
// })
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
