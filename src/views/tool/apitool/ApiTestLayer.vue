<template>
  <div v-if="visible" class="fixed-center panel apitestbox">
    <div class="panel-title flex space-between">
      调试
      <i @click="close" class="iconfont iconclose"></i>
    </div>
    <div class="panel-body">
      <!-- 接口选择输入 -->
      <div class="flex mt-10">
        <o-input class="" v-model="url" placeholder="api">
          <template slot="prepend">
            <o-select style="width:10rem;" placeholder="请选择" v-model="requestMethod">
              <o-option v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value" ></o-option>
            </o-select>
          </template>
        </o-input>
        <button @click="send()" class="btn ml-5">提交</button>
      </div>
      <!-- 参数设置 -->

      <!-- 响应信息 -->

    </div>
  </div>
</template>

<script>
import apitoolHttp from './../../../lib/http_apitool_tool'
import {getRealUrl} from './../../../utils/UrlParse'
export default {
  name: "api-test-layer",
  data() {
    return {
      visible: false,
      activeName: "second",

      //项目信息
      baseUrl:'',

      //项目id
      projectId: this.$route.query.project_id,
      options: [
        { value: "post", label: "post" },
        { value: "get", label: "get" }
      ],
      //请求信息
      requestMethod: "post",
      url:"",
      params:"",

      //输入请求参数

    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //请求
    send(){
        let {
          url,
          requestMethod,
          baseUrl
        } = this
        //验证
        if(!apitoolHttp[requestMethod]){
          this.$toast('不存在的method');return;
        }
        if(!url){
          this.$toast('请输入api地址');return;
        }

        // console.log(getRealUrl)
        //url处理
        url = getRealUrl(baseUrl,url);
        //param处理
        
        apitoolHttp[requestMethod](url,{

        }).then(res=>{
          //

        }).catch(err=>{

        })

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