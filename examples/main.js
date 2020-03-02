import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入element
import Element from '@/index.js';
import '../packages/theme-chalk/src/index.scss';
Vue.use(Element);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')