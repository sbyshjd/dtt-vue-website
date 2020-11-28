import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { lazy } from 'vue-async-manager';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: lazy(() => import('../views/Home.vue')),
  },
  {
    path: '/random',
    name: 'Random',
    component: lazy(() => import('../views/Random.vue')),
  },
  {
    path: '/categories',
    redirect: '/categories/beef',
  },
  {
    path: '/categories/:ingredient',
    name: 'Categories',
    component: lazy(() => import('../views/Categories.vue')),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: lazy(() => import('../views/Detail.vue')),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
