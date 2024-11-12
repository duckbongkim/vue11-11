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
    //component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')
    component:AboutView
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

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
