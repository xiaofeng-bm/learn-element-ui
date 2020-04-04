import Vue from 'vue';
import Main from './main.vue';
// 这里不用多说了吧，看完上面的你应该了解其作用了
const NotificationConstructor = Vue.extend(Main);

// 当前实例对象，创建在Notification函数外面，是因为在Notification外要用到。
let instance;
let instances = [];
let seed = 1;


const Notification = function(options) {

  // 将我们传入的options拷贝一份。
  // 这里merge方法作用和Object.assign()相同，所以这里为了简化，就用Object.assign替代
  options = Object.assign({}, options);

  const userOnClose = options.onClose;
  const id = 'notification_' + seed++;
  const position = options.position || 'top-right';

  options.onClose = function() {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options
  });
  instance.id = id;
  // 挂载
  instance.$mount();
  // $el是组件生成的dom对象
  document.body.appendChild(instance.$el);
  // 实例添加visible属性，控制显示
  instance.visible = true;
  instance.dom = instance.$el;

  // offset是用户设置的偏移距离，不知道的看一下element-ui的文档
  let verticalOffset = options.offset || 0;
  // instances是一个数组，用来存放当前所有生成的notify组件实例
  instances.filter(item => item.position === position).forEach(item => {
    // 当前组件偏移的位置，不明白的可以看下图
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  // 设置当前实例的偏移距离
  instance.verticalOffset = verticalOffset;
  instances.push(instance);
  return instance;
};
 
Notification.close = function(id, userOnClose) {
  let index = -1;
  const len = instances.length;
  const instance = instances.filter((instance, i) => {
    if (instance.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];


  instances.splice(index, 1);


  const position = instance.position;
  const removedHeight = instance.dom.offsetHeight;
  for (let i = index; i < len - 1 ; i++) {
    if (instances[i].position === position) {
      instances[i].dom.style[instance.verticalProperty] =
        parseInt(instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px';
    }
  }
}

export default Notification;