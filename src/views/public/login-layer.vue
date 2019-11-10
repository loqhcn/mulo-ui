<template>
  <div class="login-layer">
    <!-- 登录 弹出层 -->

    <div class="loginbox flex column">
      <div class="input-row">
        <label for>登录账号</label>
        <input v-model="account" class="form-control" type="text" placeholder="邮箱/手机号/用户名" />
      </div>
      <div class="input-row">
        <label for>密码</label>
        <input v-model="pass"   class="form-control" type="password" />
      </div>
      <div class="login-btns flex space-between">
        <button class="btn login" @click="login()">登录</button>
      </div>

      <router-link to="/user/register">没有账号?立即注册</router-link>

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

      registerShow: false,

      //登录信息
      account: "474693310@qq.com",
      pass: "123456",
      code: "" //图形验证码等
    };
  },
  methods: {
    login() {
      // TODO 1, 登录验证
      this.$http_user
        .post("/api/login/loginByEmail", {
          email: this.account,
          pass: this.pass
        })
        .then(res1 => {
          if (res1.errno) {
            return this.$toast(res1.msg);
          }
          //TODO 2,取得了access_token交换登录状态
          this.$http_apitool
            .post("/loginCheck", {
              access_token: res1.data.access_token
            })
            .then(res => {
              if (res.errno) {
                return this.$toast(res.msg);
              }
              //
              localStorage.auth_token = res.data.auth_token;
              alert('登录成功');
              this.$auth.afterLogin();
            });
        });
    },
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