import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//mulo-ui样式
import './../packpage/theme_default/src/index.scss'
//应用内样式
import './assets/style/app.scss'
//md文档内部 演示代码 的样式
import './docs/doc-style/index.scss'

import muloui from './../packpage/vue/index'
Vue.use(muloui);
import toast from '../packpage/vuepc/toast'
Vue.use(toast);

// 引入整个ui组件库
import MuloUiPc from '../packpage/vuepc'
Vue.use(MuloUiPc);

//## 路由封装函数
import appRoute from './lib/AppRoute'
Vue.prototype.appRoute = appRoute

// # 语法高亮-示例代码
// highlight.js代码高亮插件
import Highlight from './lib/highlight'; // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight);

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

import http from './lib/http'
Vue.prototype.$http = http;
window.$http = http;

//用户认证
import Auth from './lib/Auth'
Vue.prototype.$auth = new Auth();

//全局组件
import headlink from "@/views/public/head-link";
Vue.component('head-link', headlink)

//文档功能内嵌组件
import DemoBlock from './docs/demo-block'
Vue.component('demo-block',DemoBlock)


import 'highlight.js/styles/color-brewer.css';
//TODO 代码高亮  在路由渲染后执行的
import hljs from 'highlight.js';
router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
