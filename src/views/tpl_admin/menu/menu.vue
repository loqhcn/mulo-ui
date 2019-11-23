<template>
  <div>
    <o-menu
      default-active="2"
      class="o-menu-vertical-demo"
      mode="horizontal"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <o-submenu index="1">
        <template slot="title">
          <i class="o-icon-location"></i>
          <span>导航一</span>
        </template>
        <o-menu-item-group>
          <template slot="title">分组一</template>
          <o-menu-item index="1-1">选项1</o-menu-item>
          <o-menu-item index="1-2">选项2</o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group title="分组2">
          <o-menu-item index="1-3">选项3</o-menu-item>
        </o-menu-item-group>
        <o-submenu index="1-4">
          <template slot="title">选项4</template>
          <o-menu-item index="1-4-1">选项1</o-menu-item>
        </o-submenu>
      </o-submenu>
      <o-menu-item index="2">
        <i class="o-icon-menu"></i>
        <span slot="title">导航二</span>
      </o-menu-item>
      <o-menu-item index="3" disabled>
        <i class="o-icon-document"></i>
        <span slot="title">导航三</span>
      </o-menu-item>
      <o-menu-item index="4">
        <i class="o-icon-setting"></i>
        <span slot="title">导航四</span>
      </o-menu-item>
    </o-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>