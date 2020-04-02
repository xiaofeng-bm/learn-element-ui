/*
 * @Description: 作用：将多个对象的属性合并到第一个对象。
 *               比如merge({}, {name: '晓枫'}, {age: 25}) return {name: '晓枫', age: 25}
 *               个人感觉和Object.assign() 一毛一样
 * @Author: 晓枫
 * @Date: 2020-04-01 09:43:23
 * @LastEditTime: 2020-04-01 09:58:20
 */
export default function(target) {
  for (let i = 0; i < arguments.length; i++) {
    let source = arguments[i] || {};
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if(value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}
