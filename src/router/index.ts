import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue'),
  },
  {
    path: '/categories',
    redirect: '/categories/beef',
  },
  {
    path: '/categories/:ingredient',
    name: 'Categories',
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
