<template>
  <aside class="el-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'OAside',

    componentName: 'ElAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
