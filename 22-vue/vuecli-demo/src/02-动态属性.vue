<template>
  <div>
    <!--2.把值赋予给标签-->
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age >= 18 ? "成年了":"未成年" }}</h3>
    <!--v-bind:原生属性名="vue变量"-->
    <a v-bind:href="url">点击去百度</a>
    <img v-bind:src="imgUrl" alt="">
  </div>
</template>

<script>


export default {
  //1.变量在data函数的return对象上
  data(){
    return {
      msg:"Hello, Vue",
      obj: {
        name:"小vue",
        age:5
      },
      url:"http://www.baidu.com",
      imgUrl:"https://img.alicdn.com/imgextra/i2/O1CN01FF1t1g1Q3PDWpSm4b_!!6000000001920-55-tps-508-135.svg"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
