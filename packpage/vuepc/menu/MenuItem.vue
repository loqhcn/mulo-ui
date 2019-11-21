<template>
  <div class="menu-item">
    <slot name="title"></slot>
    <slot>菜单栏</slot>
  </div>
</template>

<script>
export default {
  name: "o-menu-item"
};
</script>

<style lang="scss" scoped>
</style>