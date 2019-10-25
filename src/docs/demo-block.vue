<template>
  <div>
   
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
  }
};
</script>

<style lang="scss" scoped>

</style>