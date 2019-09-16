<template>
  <div>
    <ul>
      <li @click="appRoute.go('/index/main');">主页</li>
      <li @click="appRoute.go('/index/components');">组件</li>
      <li @click="appRoute.go('/index/tutorial');">教程</li>
      <li @click="appRoute.go('/index/tool');">工具</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
      
        }
    },
};
</script>

<style lang="scss" scoped>
</style>