import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import '../style/layout-flex.scss';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    { path: '/about', component: () => import('./views/About.vue') },
   

    { path: '/radios', component: () => import('./views/radios.vue') },
    
  ]
})
