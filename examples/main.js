import Vue from 'vue';
import App from './App.vue';

// 引入我们自己写的element-ui组件
import Element from '../src/index';
// 为了看效果，样式文件在index.html中通过cdn引入，后期自己写样式的时候，记得替换
Vue.use(Element)


new Vue({
  render: h => h(App),
}).$mount('#app')