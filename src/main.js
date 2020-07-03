/*
 * @Description:
 * @Author: mhyu
 * @Date: 2020-07-03 17:25:01
 * @LastEditors: mhyu
 * @LastEditTime: 2020-07-03 18:01:31
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入样式
import './content/style/index.scss';

/**
 * 蓝色皮肤主题
 */
import './content/custom-theme/custom-theme-blue/common/index.css';

/**
 * 绿色皮肤主题
 */
import './content/custom-theme/custom-theme-green/common/index.css';

(function(){
  let element = document.body,
  className = 'custom-theme-blue';
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString = '' + className;
  }
  else {
    return;
  }
  element.className = classString;
}());

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
