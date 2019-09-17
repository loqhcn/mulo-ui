<template>
  <div>
    <ul class="mainmenu flex">
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
.mainmenu li{
  height: 100px;
  width: 100px;
  text-align: center;
  
}
.mainmenu li:hover{
  color: red;
}

</style>