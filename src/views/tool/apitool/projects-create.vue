<template>
  <div>
    <div class="flex space-between">
      <div class="title">创建项目</div>
      <div>
        <router-link to="/apitool">
          <button class="btn btn-back">返回</button>
        </router-link>
      </div>
    </div>
    <div class="detail">
      <div class="input-row item-padding-5">
        <o-input style="width:18rem" v-model="project_name" type="text" placeholder="项目名称" />
        <button class="btn" @click="create">创建</button>
      </div>
    </div>
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