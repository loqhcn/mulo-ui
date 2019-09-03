import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import muloui from './../packpage/vue/index'

Vue.use(muloui);


//## 路由封装函数
Vue.prototype.appRoute={
  go(path,params){
    params = params||{};
    router.push({ path:path,query:params }); 
  },
  back(){
    if (window.history.length <= 1) {
      router.push({path:'/'})
      return false
    } else {
      router.back()
    }
  }
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
