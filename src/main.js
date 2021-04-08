import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入第三方插件 axios
import axios from "axios"
Vue.prototype.$http = axios,

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
