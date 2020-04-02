import Vue from 'vue';
import Main from './main.vue';
import merge from '@/utils/merge.js';

const NotificationConstructor = Vue.extend(Main);

let notify;                 // 单个弹框实例
let notify_list = [];       // 存放多个弹框实例
let seed = 1;               // 计数id

const Notification = function(options) {
  // 当前 Vue 实例是否运行于服务器。(Vue源码中定义在prototype上的)
  if(Vue.prototype.$isServer) return;
  options = merge({}, options);

  options.onClose = function() {
    notify_list.pop();
    console.log(notify_list)
  }

  // 创建notify实例
  notify = new NotificationConstructor({
    data: options
  });
  // 挂载
  notify.$mount();
  document.body.appendChild(notify.$el);
  // 设置visible为true
  notify.visible = true;

  let verticalOffset = options.offset || 0;
  notify_list.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  })
  verticalOffset += 16;
  notify.verticalOffset = verticalOffset;
  notify_list.push(notify);
  return notify;
}

Notification.close = function(id, userOnClose) {

}



export default Notification;