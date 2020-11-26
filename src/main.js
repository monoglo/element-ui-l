import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'xGY3ClN9dQSfk6zhOV5rNnzalD9nGx50'
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
