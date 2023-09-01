import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let a = 10

//方式1:全局 - 过滤器
//任意的.vue文件内"直接"使用
//语法:Vue.filter("过滤器的名字",值=>处理函数)
Vue.filter("reverse",(val,s)=>val.split("").reverse().join(s))

//全局指令 - 到处直接使用
Vue.directive('gfocus', {
  inserted(el){
    console.log(el)
  }
});
//目标:自定义指令传值
Vue.directive("color",{
  inserted(el,binding){
    el.style.color = binding.value
  },
  update(el,binding){
    el.style.color = binding.value
  }
})

new Vue({
 // el:"#app",//vue实例编译后的模版挂载到index.html的id 叫app的标签上
  render: h => h(App),
}).$mount('#app')
