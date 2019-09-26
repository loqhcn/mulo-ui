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

        //移动端组件
        {
          path: 'components',
          component: () => import('./views/components/components.vue'),
          //组件文档
          children:[
            { path: '', component: () => import('./views/components/start.vue') },

            { path: 'radios', component: () => import('./views/components/doc/radios.vue') },
            { path: 'button', component: () => import('./views/components/doc/button.vue') },
            { path: 'message-box', component: () => import('./views/components/doc/message-box.vue') },
           
          ]
        },
        //web组件
        {
          path: 'components-web',
          component: () => import('./views/components-web/components-web.vue'),
          //组件文档
          children:[
            { path: '', component: () => import('./views/components-web/start.vue') },

            { path: 'radios', component: () => import('./views/components-web/doc/radios.vue') },
            { path: 'button', component: () => import('./views/components-web/doc/button.vue') },
            { path: 'message-box', component: () => import('./views/components-web/doc/message-box.vue') },
           
          ]
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
  
    
    //用户
    { path: '/user/register', component: () => import('./views/user/register.vue') },
  
  ]
})
