<template>
  <div>
    <div class="flex space-between">
      <div class="btn">项目详情:{{info.name}}</div>
      <div>
        <button @click="del" class="btn">删除项目</button>
        <router-link to="/apitool">
          <button class="btn btn-back">返回</button>
        </router-link>
      </div>
    </div>

    <div class="row">

    </div>
    <div class="flex">
      <div class="col-8">
        api列表
        <ul class="apis">
          <li @click="openApiDetail(index)" v-for="(li,index) in apiList" :key="index">{{li.name}}</li>
        </ul>
      </div>
      <div class="col-16 panel">
        <div class="panel-title flex space-between">
          <label for>{{apiInfo.name}}</label>
          <div class="item-margin-1">
            <button class="btn btn-primary">调试</button>
            <button class="btn">保存</button>
            <button class="btn btn-danger">删除</button>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div>
              <label>名称:</label>
              <input class="form-control" :value="apiInfo.name" />
            </div>

            <div>
              <label>链接:</label>
              <input class="form-control" :value="apiInfo.url" />
            </div>
          </div>
          <div class="col-16"></div>
        </div>
      </div>
    </div>

    <!-- 弹出层 调试api -->
    <api-test-layer ref="test_layer"></api-test-layer>


  </div>
</template>

<script>
import ApiTestLayer from "./ApiTestLayer";
export default {
  components: {
    [ApiTestLayer.name]: ApiTestLayer
  },
  data() {
    return {
      project_id: this.$route.query.project_id,
      info: {},
      apiList: [],
      apiInfo: {}
    };
  },
  created() {
    this.$http_apitool
      .post("project/detail", { id: this.project_id })
      .then(res => {
        if (res.errno) {
          return;
        }

        this.info = res.data.info;
      });
    //apis
    this.$http_apitool
      .post("apis/list", { project_id: this.project_id })
      .then(res => {
        if (res.errno) {
          return;
        }
        this.apiList = res.data.list;
      });
  },
  methods: {
    openApiDetail(index) {
      this.apiInfo = this.apiList[index];
    },
    del() {
      if (!confirm("删除")) {
        return;
      }
      this.$http_apitool
        .post("project/del", { id: this.project_id })
        .then(res => {
          if (res.errno) {
            return;
          }
          this.$toast("删除成功");
          this.appRoute.back();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>