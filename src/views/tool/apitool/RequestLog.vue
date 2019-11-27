<template>
  <div>
    <div class="row" style="height:100px"> 
      <o-tabs v-model="activeName" >
        <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
        <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
        <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
        <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
      </o-tabs>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in 4" :key="x">
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
          <td>
            <button class="btn btn-success">编辑</button>
            <button class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectId: this.$route.query.project_id,
      list: [],
      activeName:'second'
    };
  },
  created() {
    this.loadList(true);
  },
  methods: {
    loadList(reset) {
      if (reset) {
        this.page = 1;
      }
      this.$http_apitool
        .post("api_request/list", { project_id: this.projectId })
        .then(res => {
          if (res.errno) {
            this.$toast(res.msg);
            return;
          }
          this.list = res.data.list;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>