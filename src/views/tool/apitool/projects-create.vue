<template>
  <div>
    <div class="flex space-between">
      <div class="title">创建项目</div>
      <div>
      
        <router-link to="/apitool"><button class="btn btn-back">返回</button></router-link>
      </div>
    </div>
    <div class="detail">
      <div class="input-row">
        <span>那啥</span>
        <input v-model="project_name" type="text" placeholder="项目名称" />
      </div>
    </div>
    <button class="btn" @click="create">创建</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project_name: ""
    };
  },
  methods: {
    create() {
      this.$http_apitool
        .post("/apitool/project/create", { name: this.project_name })
        .then(res => {
          if (res.errno) {
            this.$toast(res.msg);
            return;
          }
          alert("创建成功");
          this.appRoute.back();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>