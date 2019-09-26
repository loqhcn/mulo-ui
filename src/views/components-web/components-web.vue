<template>
  <div class="components-body">
    <div class="components-doc flex ">
      <!-- 组件列表 -->
      <ul class="components-menus flex column col-6">
        

        <li @click="appRoute.go('/index/components/radios')">radios选择</li>

        <li @click="appRoute.go('/index/components/button')">按钮</li>


        <li @click="appRoute.go('/index/components/message-box')">提示消息</li>
      </ul>

      <div class="doc-detail col-18">
        <router-view></router-view>
      </div>
    </div>
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
.components-doc {
}
</style>