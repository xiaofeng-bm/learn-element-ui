import ElButton from './src/button.vue';

/* 按需加载是，单独注册为全局组件 */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
