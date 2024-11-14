import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestView from '../views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')
    
  },
  
  {
    path: '/test',
    name: 'test',
    //component: () => import(/* webpackChunkName: "test" */ '../views/TestView.vue')
    component:TestView
  },

  {
    path: '/string',
    name: 'string',
    component: () => import(/* webpackChunkName: "string" */ '../views/DataBinding/DataBindingStr.vue')
    
  },

  {
    path: '/html',
    name: 'html',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/HtmlView.vue')
    
  },

  {
    path: '/Atv',
    name: 'Atv',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/AtvView.vue')
    
  },

  {
    path: '/class',
    name: 'class',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/classView.vue')
    
  },

  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/inputView.vue')
    
  },

  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/listView.vue')
    
  },

  {
    path: '/CbRdSc',
    name: 'CbRdSc',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/CbRdScView.vue')
    
  },

  {
    path: '/calcul',
    name: 'calcul',
    component: () => import(/* webpackChunkName: "databindin" */ '../views/DataBinding/CalculatorView.vue')
    
  },

  {
    path: '/Click',
    name: 'Click',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event/ClickView.vue')
    
  },
  {
    path: '/Change',
    name: 'Change',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event/ChangeView.vue')
    
  },
  {
    path: '/key',
    name: 'key',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event/keyView.vue')
    
  },

  {
    path: '/render',
    name: 'render',
    component: () => import(/* webpackChunkName: "event" */ '../views/Extra/RenderView.vue')
    
  },
  {
    path: '/rendershow',
    name: 'rendershow',
    component: () => import(/* webpackChunkName: "event" */ '../views/Extra/RenderShowView.vue')
    
  },

  {
    path: '/compu',
    name: 'compu',
    component: () => import(/* webpackChunkName: "event" */ '../views/Extra/CompuView.vue')
    
  },

  {
    path: '/Watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "event" */ '../views/Extra/WatchView.vue')
    
  },

  {
    path: '/Change2',
    name: 'Change2',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event/Change2View.vue')
    
  },

  {
    path: '/life',
    name: 'lief',
    component: () => import(/* webpackChunkName: "event" */ '../views/Extra/LifeCycleView.vue')
    
  },

  {
    path: '/Pageview',
    name: 'Pageview',
    component: () => import(/* webpackChunkName: "event" */ '../views/reuse/PageView.vue')
    
  },

  {
    path: '/parent',
    name: 'parnet',
    component: () => import(/* webpackChunkName: "event" */ '../views/reuse/ParentView.vue')
    
  },

  {
    path: '/parent2',
    name: 'parnet2',
    component: () => import(/* webpackChunkName: "event" */ '../views/reuse/ParentView2.vue')
    
  },



  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
