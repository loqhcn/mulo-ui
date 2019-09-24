<template>
  <div class="login-layer">
    <!-- 登录 弹出层 -->

    <div class="loginbox flex column">
      <div class="input-row">
        <label for>登录账号</label>
        <input type="text" placeholder="邮箱/手机号/用户名" />
      </div>
      <div class="input-row">
        <label for>密码</label>
        <input type="text" />
      </div>
      <button @click="login()">登录</button>
      <button @click="register()">注册</button>

      <button class="closebtn" style="margin-top:10px;" @click="close()">关闭</button>
      
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "login-layer",

      registerShow: false
    };
  },
  methods: {
    login() {},
    //注册
    register() {},
    close() {
      this.$emit("close", 1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>