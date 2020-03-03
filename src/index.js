import Button from '../packages/button/index';


const components = [
  Button
]

function install(Vue, opts = {}) {
  // 注册为Vue全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // https://element.eleme.cn/#/zh-CN/component/quickstart（全局配置）
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

export default {
  install
}