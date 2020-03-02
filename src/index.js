import Button from '../packages/button/index';


const components = [
  Button
]

function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

export default {
  install
}