<template>
  <div>
    <div  class="components-doc flex">
      <!-- 组件列表 -->
      <ul>
        <li @click="appRoute.go('/index/components/radios')">radios选择</li>

        <li @click="appRoute.go('/index/components/button')">按钮</li>

        <li @click="appRoute.go('/index/components/layer')">弹出层</li>

        <li @click="appRoute.go('/index/components/message-box')">提示消息</li>




      </ul>
      <div class="doc-detail">
        <router-view></router-view>
      </div>
    </div>
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
.components-doc {

}
</style>