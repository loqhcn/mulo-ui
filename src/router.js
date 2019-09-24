import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

import MainLayout from './views/layout/main'

Vue.use(Router)

import '../style/layout-flex.scss';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    //组件列表
    {
      path: '/index',
      name: 'index',
      component: MainLayout,
      children:[
        {
          path: 'main',
          name: 'main',
          component: () => import('./views/main/main.vue'),
        },
        {
          path: 'components',
          name: 'components',
          component: () => import('./views/components/components.vue'),
        },
        {
          path: 'tutorial',
          name: 'tutorial',
          component: () => import('./views/tutorial/tutorial.vue'),
        },
        {
          path: 'tool',
          name: 'tool',
          component: () => import('./views/tool/tool.vue'),
        },
      ]
    },
    
    // { path: '/about', component: () => import('./views/About.vue') },
   

    { path: '/radios', component: () => import('./views/radios.vue') },
    
    { path: '/plan_tool', component: () => import('./views/tool/plan/plan.vue') },
    { path: '/apitool', component: () => import('./views/tool/apitool/apitool.vue') },
  ]
})
