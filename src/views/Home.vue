<template>
  <div class="mulo-ui-home">
    <div class="flex space-between">
      <div class="logo">
        <img src="./../assets/logo.png" alt srcset />
      </div>
    </div>

    <div class="mulo-ui-desc">
      <H1>Mulo Ui</H1>
      <h4>一个基于Vue的开源Ui组件库~</h4>
      <o-button style="width:10rem" @click="appRoute.go('/index/main')">进入</o-button>
    </div>

    <div class="col-23 col-md-10 panel margin-auto mt-20">
      <div class="panel-title">更多</div>
      <div class="myapps flex wrap item-pr-10 item-pt-10">
       

        <a
          v-for="(li,index) in moreLinks"
          :key="index"
          :href="li.link"
          target="guanwang"
        >
          <div class="aligin-center">{{li.name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      //更多链接
      moreLinks: []
    };
  },
  created() {
    this.$http.post("/mulo/index/more_link", { system: "muloui" }).then(res => {
      if (res.errno) {
        this.toast(res.msg);
        return;
      }
      this.moreLinks = res.data.list;
    });
  },
  components: {
    HelloWorld
  }
};
</script>
<style lang="scss">
.mulo-ui-desc {
  text-align: center;
  margin: auto;
  margin-top: 200px;
}
.myapps a {
  color: aquamarine;
  font-weight: bold;
}
</style>
