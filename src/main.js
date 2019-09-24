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

//## 路由封装函数
import appRoute from './lib/AppRoute'
Vue.prototype.appRoute= appRoute

//
import axios from 'axios'
Vue.prototype.$axios = axios;

window.axios = axios;
window.router = router;



//用户认证
import Auth from './lib/Auth'
Vue.prototype.$auth = new Auth();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
