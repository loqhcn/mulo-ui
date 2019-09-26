<template>
  <div>
    <div class="flex space-between mulo-ui-header">
      <router-link to="/">
        <h1 class="mulo-ui-logo">Mulo Ui</h1>
      </router-link>
      <ul class="mainmenu flex">
        <li @click="appRoute.go('/index/main');">主页</li>
        <li @click="appRoute.go('/index/components');">mobile组件</li>
        <li @click="appRoute.go('/index/components');">web组件</li>
        <li @click="appRoute.go('/index/tutorial');">教程</li>
        <li @click="appRoute.go('/index/tool');">工具</li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.mainmenu li {
  height: 100px;
  width: 100px;
  text-align: center;
}
.mainmenu li:hover {
  color: red;
}
.mulo-ui-logo {
  color: red;
}
.mulo-ui-header{
  padding: 0 20px;
}
</style>