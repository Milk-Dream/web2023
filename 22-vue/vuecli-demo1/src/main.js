import Vue from 'vue'
import App from './App.vue'

import store from './store'

import VueRouter from 'vue-router'
import Find from "@/views/Find" //@是src的绝对路径
import My from "@/views/My"
import Part from "@/views/Part"


Vue.use(VueRouter)

//4.规则数组
const routes = [
  {
    path:"/find",
    component:Find
  },
  {
    path:"/my",
    component:My
  },
  {
    path:"/part",
    component:Part
  }
]

//生成路由对象
const router = new VueRouter({
  routes:routes//routes是固定key(传入规则数组)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
