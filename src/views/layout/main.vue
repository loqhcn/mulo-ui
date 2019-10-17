<template>
  <div >
    <head-link class="fixed-header"></head-link>
    <div class="flex column" >
      
       <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.fixed-header{
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;

}
</style>