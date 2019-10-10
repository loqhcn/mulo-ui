import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//使用本地组件
import './assets/style/default.scss'
import './assets/style/app.scss'

import muloui from './../packpage/vue/index'
Vue.use(muloui);
import toast from '../packpage/vuepc/toast'
Vue.use(toast);

//## 路由封装函数
import appRoute from './lib/AppRoute'
Vue.prototype.appRoute = appRoute

//
import axios from 'axios'
Vue.prototype.$axios = axios;

window.axios = axios;
window.router = router;


import http_user from './lib/http_user'
Vue.prototype.$http_user = http_user;
window.$http_user = http_user;

import http_apitool from './lib/http_apitool'
Vue.prototype.$http_apitool = http_apitool;
window.$http_apitool = http_apitool;

//用户认证
import Auth from './lib/Auth'
Vue.prototype.$auth = new Auth();

//全局组件
import headlink from "@/views/public/head-link";
Vue.component('head-link', headlink)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
