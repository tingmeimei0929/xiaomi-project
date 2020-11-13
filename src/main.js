// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import lazyLoad from 'vue-lazy-load'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/common.scss'
import './assets/scss/footer.scss'
import './assets/scss/header.scss'
import './assets/scss/banner.scss'
import './assets/scss/main.scss'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(lazyLoad, {
  loading: '', // 默认加载图片的路径
  error: '' // 加载错误图片的路径
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
