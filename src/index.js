import Button from '../package/button';

const components = [
  Button
]
/* 执行Vue.use(Element)会调用插件的install方法
 * 注意：这里函数名必须叫install
 */
const install = function(Vue) {
  // 循环所有组件，将其注册为vue全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

export default {
  install
}