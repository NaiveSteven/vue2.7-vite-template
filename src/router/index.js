import Vue from 'vue';
import VueRouter from 'vue-router';
import routeModules from './modules';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/demo',
  },
  ...routeModules,
];

export const router = new VueRouter({
  mode: 'hash',
  routes,
});
