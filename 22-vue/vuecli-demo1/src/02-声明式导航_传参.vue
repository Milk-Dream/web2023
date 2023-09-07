<template>
    <div>
      <div class="footer_wrap">
        <router-link to="/find">发现音乐</router-link>
        <router-link to="/my">我的音乐</router-link>
        <router-link to="/part">朋友</router-link>
      </div>
      <div class="top">
        <!--设置挂载点-当url的hash值路径切换，显示规则里对应的组件到这-->
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>