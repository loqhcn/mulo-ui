<template>
  <div id="app">
    <router-view v-if="isRouterShow" />

    <!-- 登录弹出层 -->
    <login-layer v-show="showLogin" @close="closeLogin"></login-layer>
  </div>
</template>
<script>
import loginLayer from "@/components/auth/login-layer.vue";
export default {
  components: {
    "login-layer": loginLayer
  },
  data() {
    return {
      //wap网页版登录弹出层
      showLogin: true,

      //用于登录后的组件重渲染
      isRouterShow: true
    };
  },
  methods: {
    /**
     * 窗口化登录页面后进行重新渲染
     *
     */
    async reload() {
      this.isRouterShow = false;
      await this.$nextTick();
      this.isRouterShow = true;
    },

    closeLogin() {
      this.showLogin = false;
    }
  }
};
</script>
<style>
</style>
