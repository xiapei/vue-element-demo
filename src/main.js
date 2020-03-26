// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Mock from './mock'

import '@/styles/index.scss' // global css
import '@/assets/icon/iconfont.css' // global css

Vue.config.productionTip = false
Vue.use(ElementUI)
Mock.bootstrap()

/* eslint-disable no-new */
// 创建根实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
