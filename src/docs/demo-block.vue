<template>
  <div :class="[blockClass]">
    <!-- 展示组件内容 -->
    <div class="sources">
      <slot name="source"></slot>
    </div>
    <slot></slot>
    <!-- 展示组件源码 -->
    <div v-highlight class="highlight">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $router: (nroute, old) => {}
  },
  methods: {
    name() {}
  },
  computed: {
    blockClass() {
      // console.log("computed blockClass");
      let paths = this.$router.currentRoute.path.split("/");
      return paths[paths.length - 2] + "-" + paths[paths.length-1];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>