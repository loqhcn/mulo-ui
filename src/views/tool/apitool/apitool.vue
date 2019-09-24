<template>
  <div>
    <div class="title">api测试工具</div>
    <div class="desc-text">提供api的测试体系工具</div>
    
 

   
  </div>
</template>

<script>
export default {
  data() {
    return {
        //登录控制
      login_name: "",
      login_pass: "",

        //操作控制
      showLogin:false,
    };
  },
  created() {
      if(localStorage.auth_token){
          this.showLogin = true;
      }
  }
};
</script>

<style lang="scss" scoped>
</style>