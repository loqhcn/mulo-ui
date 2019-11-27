<template>
  <div>
    <div class="flex space-between">
      <div class="btn">项目详情:{{info.name}}</div>
      <!-- 项目管理 -->
      <div class="item-margin-5">
  
        <router-link class="btn btn-info" to="/apitool/request_log">请求记录</router-link>
        <button @click="del" class="btn">删除项目</button>
        <router-link to="/apitool">
          <button class="btn btn-back">返回</button>
        </router-link>
      </div>
    </div>

    <div class="row"></div>
    <div class="flex">
      <div class="col-8 col-md-4">
        api列表
        <ul class="apis">
          <li @click="openApiDetail(index)" v-for="(li,index) in apiList" :key="index">{{li.name}}</li>
          <button @click="createApi" class="btn btn-primary full">创建api</button>
          <button  class="btn btn-success full">创建分组</button>

        </ul>
      </div>
      <div class="col-16 panel col-md-20">
        <!-- 接口管理 -->
        <div class="panel-title flex space-between">
          <label for>{{apiInfo.name}}</label>
          <div class="item-margin-1">
            <button @click="openTest()" class="btn btn-primary">调试</button>
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
    <api-edit-layer ref="edit_layer"></api-edit-layer>

  </div>
</template>

<script>
import ApiTestLayer from "./ApiTestLayer";
import ApiEditLayer from "./ApiEditLayer";

export default {
  components: {
    [ApiTestLayer.name]: ApiTestLayer,
    [ApiEditLayer.name]: ApiEditLayer,

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
    createApi(){
      this.$refs.edit_layer.visible = true;
      this.$refs.test_layer.baseUrl = this.info.base_url;
    },
    //打开调试
    openTest() {
      this.$refs.test_layer.visible = true;
      this.$refs.test_layer.baseUrl = this.info.base_url;
      this.$refs.test_layer.url = this.apiInfo.url;

    },
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