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
import VueLazyLoad from 'vue-lazyload'
import $ from 'jquery'
import './assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/swiper/css/swiper.css'
import './assets/swiper/css/swiper.min.css'
import './assets/scss/common.scss'
import './assets/scss/footer.scss'
import './assets/scss/header.scss'
import './assets/scss/navbar.scss'
import './assets/scss/main.scss'
import './assets/scss/toolbar.scss'
import './assets/scss/login.scss'
import './assets/scss/registered.scss'
import './assets/scss/cart.scss'
import './assets/scss/forget.scss'
import './assets/scss/spike.scss'
import './assets/scss/company.scss'
import './assets/scss/commodity.scss'
import './assets/scss/codeRules.scss'
import './assets/scss/details.scss'
import './assets/scss/dialog.scss'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use($)
Vue.use(VueLazyLoad, {
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
