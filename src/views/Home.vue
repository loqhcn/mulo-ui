<template>
  <div class="home">
    <H1>Mulo-Ui</H1>
    <h4>一个开源的长期长期累积使用的ui组件库</h4>
    <button @click="appRoute.go('/index/main')">进入</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
