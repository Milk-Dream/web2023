<template>
  <div>
    <div class="footer_wrap">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/part">朋友</a>
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