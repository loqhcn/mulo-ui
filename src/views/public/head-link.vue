<template>
  <div class="flex space-between mulo-ui-header">
    <router-link to="/">
      <h1 class="mulo-ui-logo">Mulo Ui</h1>
    </router-link>
    <ul class="mainmenu flex">
      <li @click="appRoute.go('/index/main');">主页</li>
      <li @click="appRoute.go('/index/components');">mobile组件</li>
      <li @click="appRoute.go('/index/components-web');">web组件</li>
      <li @click="appRoute.go('/index/tutorial');">教程</li>
      <li @click="appRoute.go('/index/tool');">工具</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mainmenu li {
  height: 100px;
  width: 100px;
  text-align: center;
  color: #fa4a80;
}
.mainmenu li:hover {
  color: red;
  transform: scale(1.2) translateY(10px)
}
.mulo-ui-logo {
  color: red;
}
.mulo-ui-header {
  padding: 0 20px;
}
</style>