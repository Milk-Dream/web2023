import Vue from 'vue'
import App from './App.vue'

import store from './store'

import VueRouter from 'vue-router'
import Find from "@/views/Find" //@是src的绝对路径
import My from "@/views/My"
import Part from "@/views/Part"
import NotFound from "@/views/NotFound"
import Recommend from "@/views/Recommend"
import Ranking from "@/views/Ranking"
import SongList from "@/views/SongList"


Vue.use(VueRouter)

//4.规则数组
const routes = [
  {
    path:"/",//默认hash值路径
    redirect:"/find"//重定向到find

  },
  {
    path:"/find",
    component:Find,
    name:"Find",
    children:[
      {
        path:"recommend",
        component:Recommend
      },
      {
        path:"ranking",
        component:Ranking
      }
    ]
  },
  {
    path:"/my",
    component:My,
    name:"My"
  },
  {
    path:"/part",
    component:Part,
    name:"Part"
  },
  {
    path:"/part/:username/:id" //有:的路径代表要接受具体的值
  },
  //404一定要在最后
  {
    path:"*",
    component:NotFound
  }
]

//生成路由对象
const router = new VueRouter({
  routes:routes,//routes是固定key(传入规则数组)
  mode:"history"
})

router.beforeEach((to,from,next)=> {
  console.log(to)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
