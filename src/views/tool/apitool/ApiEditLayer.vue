<template>
  <div v-if="visible" class="fixed-center panel apitestbox" ref="body">
    <div class="panel-title flex space-between">
      调试
      <i @click="close" class="iconfont iconclose"></i>
    </div>
    <!-- 编辑api -->
    <div class="panel-body">
      <div class="form">
        <div class="form-item">
          <label class="form-item-label">名称:</label>
          <o-input v-model="info.name"></o-input>
        </div>

        <div class="form-item">
          <label class="form-item-label">地址:</label>
          <o-input v-model="info.url">
            <template v-slot="prepend">
              <div>{{baseUrl}}asdfsd</div>
            </template>
          </o-input>
        </div>

        <div class="form-item">
          <label class="form-item-label">method:</label>
          <o-select  placeholder="请选择" v-model="info.method">
            <o-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></o-option>
          </o-select>
        </div>

        <div class="form-item">
          <button @click="submit" class="btn">创建</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apitoolHttp from "./../../../lib/http_apitool_tool";

export default {
  name: "api-edit-layer",
  data() {
    return {
      visible: false,
      baseUrl:'',
      //项目id
      projectId: this.$route.query.project_id,
      info: {},
      options: [
        { value: "post", label: "post" },
        { value: "get", label: "get" }
      ]
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submit(){
        if(!this.info.url){
            this.$toast('url不能为空');return;
        }

        this.info.project_id  = this.projectId;
        this.$http_apitool.post('apis/save',this.info).then(res=>{
            if (res.errno) {
                this.$toast(res.msg);
                return;
            }

        });
    }   
  }
};
</script>

<style lang="scss" scoped>
.apitestbox {
  width: 100%;
  height: 100%;
}
</style>