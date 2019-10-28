import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import MainLayout from './views/layout/main'

Vue.use(Router)


//引入文档

import navWeb from './nav_web.config.js'
import navMibile from './nav_mobile.config.js'
import navCss from './nav_css.config.js'
var webComponentRoute = [];

webComponentRoute = loadMap(navWeb['zh-cn'], 'zh-cn','web');

var mobileComponentRoute = loadMap(navMibile['zh-cn'], 'zh-cn','mobile');

var cssComponentRoute = loadMap(navCss['zh-cn'], 'zh-cn','css');


//加载路由文档路由列表
function loadMap(routesSet, lang,type) {
  type=type||'web'; // web mobile css 
  var routes = [];
  routesSet.forEach(groupInfo => {
    groupInfo.menus.forEach(p => {
      routes.push({
        path: p.path,
        component: () => import(`./docs/${lang}/${type}/${p.path}.md`),
      })
    });
  })
  return routes;
}

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
      children: [
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
          children: [
            { path: '', component: () => import('./views/components/start.vue') },
            ...mobileComponentRoute
          ]
        },
        //web组件
        {
          path: 'components-web',
          component: () => import('./views/components-web/components-web.vue'),
          //组件文档
          children: [
            { path: '', component: () => import('./views/components-web/start.vue') },
            ...webComponentRoute
          ]
        },
        //web组件
        {
          path: 'components-web',
          component: () => import('./views/components-web/components-web.vue'),
          //组件文档
          children: [
            { path: '', component: () => import('./views/components-web/start.vue') },
            ...webComponentRoute
          ]
        },
        //web组件
        {
          path: 'css-doc',
          component: () => import('./views/css-doc/css-doc.vue'),
          //组件文档
          children: [
            { path: '', component: () => import('./views/components-web/start.vue') },
            ...cssComponentRoute
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
        { path: 'admin', component: () => import('./views/admin/admin.vue') },
      ]
    },

    // { path: '/about', component: () => import('./views/About.vue') },


    { path: '/radios', component: () => import('./views/radios.vue') },

    { path: '/plan_tool', component: () => import('./views/tool/plan/plan.vue') },

    {
      path: '/apitool',
      component: () => import('./views/tool/apitool/apitool.vue'),
      children: [
        { path: '', component: () => import('./views/tool/apitool/projects.vue'), },

        { path: 'projects_create', component: () => import('./views/tool/apitool/projects-create.vue'), },
        { path: 'projects_detail', component: () => import('./views/tool/apitool/projects-detail.vue'), },


      ],
    },






    //用户
    { path: '/user/register', component: () => import('./views/user/register.vue') },


    // # begin 后台模板

    { path: '/admin/login/login', component: () => import('./views/admin/login/login.vue') },


    // # end 后台模板



  ]

})
