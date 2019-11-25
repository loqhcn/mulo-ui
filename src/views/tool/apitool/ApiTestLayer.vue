<template>
  <div v-if="visible" class="fixed-center panel apitestbox">
    <div class="panel-title">
      调试
      <i @click="close" class="iconfont iconclose"></i>
    </div>
    <div class="panel-body">
      <o-tabs >
        <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
        <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
        <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
        <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
      </o-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "api-test-layer",
  data() {
    return {
      visible: true,
      activeName: 'second'
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style lang="scss" scoped>
.apitestbox{
     width: 700px;
     height: 300px;
}
</style>