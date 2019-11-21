<template>
  <div>
    123
    <o-menu column class="drak">
      <o-submenu>
        <template v-slot:title>
          <i class="iconfont icongood"></i>
          内容管理
        </template>

        <o-menu-item>1</o-menu-item>
        <o-menu-item>1</o-menu-item>
        <o-menu-item>1</o-menu-item>
      </o-submenu>

      <o-submenu>
        <template v-slot:title>
          <i class="iconfont icongood"></i>
          用户管理
        </template>
        <o-menu-item>菜单栏</o-menu-item>
        <o-menu-item>1</o-menu-item>
        <o-menu-item>1</o-menu-item>
      </o-submenu>
      <o-submenu>
        <template v-slot:title>
          <i class="iconfont icongood"></i>
          用户管理
        </template>
        <o-menu-item>菜单栏</o-menu-item>
        <o-menu-item>菜单栏</o-menu-item>
        <o-menu-item>菜单栏</o-menu-item>
      </o-submenu>
    </o-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>