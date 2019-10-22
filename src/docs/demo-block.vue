<template>
  <div>
    <span>代码演示模板</span>
    <!-- 展示组件内容 -->
    <slot name="source"></slot>
    <slot></slot>
    <!-- 展示组件源码 -->
    <div class="highlight">
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