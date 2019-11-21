<template>
  <div @click="toggleChild" class="menu-item">
    <div><slot name="title">title</slot></div>
    <slot v-if="showChild"></slot>
  </div>
</template>

<script>
export default {
    name:'o-submenu',
    data() {
        return {
            showChild: false
        }
    },
    methods: {
        toggleChild() {
            this.showChild = !this.showChild
        }
    },
};
</script>

<style lang="scss" scoped>
</style>