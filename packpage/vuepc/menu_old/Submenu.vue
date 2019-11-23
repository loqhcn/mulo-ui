<template>
  <div @click="toggleChild" class="menu-item submenu">
    <div>
      <slot name="title">title</slot>
    </div>
    <collapse-transition>
      <div v-show="showChild" class="menu-item " >
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from "./../../transitions/collapse-transition";

export default {
  name: "o-submenu",
  components: {
    CollapseTransition
  },
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    toggleChild() {
      this.showChild = !this.showChild;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>