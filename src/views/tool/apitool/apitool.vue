<template>
  <div>
    <!-- <head-link></head-link> -->
    <div class="title">api测试工具</div>
    <!-- <div class="">提供api的测试体系工具</div> -->
    <router-view></router-view>

    
  </div>
</template>

<script>
import projects from "./projects.vue";
export default {
  components: {
    projects
  },
  data() {
    return {
      //登录控制
      login_name: "",
      login_pass: "",

      //操作控制
      showLogin: false
    };
  },
  created() {
    if (!localStorage.auth_token) {
      this.$auth.relogin();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>