<template>
  <div class="home">
   <div>hellow</div>

    <ul>
      <li @click="appRoute.go('/radios')">radios</li>
    </ul>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
