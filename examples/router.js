import Vue from 'vue';
import Router from 'vue-router';
import Button from './views/button.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./layout.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('./views/layout.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('./views/input.vue')
    },
    {
      path: '/notify',
      name: 'notify',
      component: () => import('./views/notify.vue')
    }
  ]
})