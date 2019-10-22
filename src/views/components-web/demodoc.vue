<template>
  <div>
    文档编写模板
    <div class="pannel">
      <div class="pannel-body" v-highlight >
     
        <pre><code class="html javascript hljs-javadoc hljs xml" v-pre>
          
        </code></pre>
      </div>
    </div>

    <div v-for="x in 1000" :key="x">{{x}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code1: `    <div class="mulo-admin-login">
        <div class="admin-login-container">
                <div class="login-title">mulo-ui-admin</div>
                <div class="login-input">
                    <div class="login-input-row">
                        <label for="">账号:</label>
                        <input type="text" class="formcorl">
                    </div>

                    <div class="login-input-row">
                        <label for="">密码:</label>
                        <input type="text" class="formcorl">
                    </div>

                    <div class="login-input-row">
                       <button class="btn">登录</button>
                    </div>
                </div>
        </div>
    </div>`
    };
  },
  methods: {
    escape(e) {
      return escape(e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>