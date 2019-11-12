<template>
  <div>
    <head-link class="fixed-header"></head-link>
    <div class="flex column">
      <router-view :style="{'margin-top':`${headerHeight}px`}" ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route: (o, n) => {}
  },
  mounted() {
    this.headerHeight = document.querySelector(".mulo-ui-header").offsetHeight;
  },
  components: {},
  data() {
    return {
      headerHeight: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.fixed-header {
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
}
</style>