<template>
    <div>
      <div class="footer_wrap">
        <span @click="btn('/find','Find')">发现音乐</span>
        <span @click="btn('/my','My')">我的音乐</span>
        <span @click="btn('/part','Part')">朋友</span>
        <span @click="oneBtn">朋友-小船</span>
        <span @click="twoBtn">朋友-小智</span>
      </div>
      <div class="top">
        <!--设置挂载点-当url的hash值路径切换，显示规则里对应的组件到这-->
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods:{
    btn(targetPath,targetName) {
        //方式1:path跳转
        /*this.$router.push({
            path:targetPath
        })*/
        this.$router.push({
            path:targetName
        })
    },
    oneBtn() {
        this.$router.push({
            name:"Part",
            params:{
                username:"小船"
            }
        })
    },
    twoBtn() {
        this.$router.push({
            name:"Part",
            query:{
                name:"小智"
            }
        })
    }
  }
  }
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>