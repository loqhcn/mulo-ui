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
        <a href="https://www.kancloud.cn/loqhcn/mulo_code/1242892" target="guanwang">
          <div class="aligin-center">文档中心</div>
        </a>
        <a href="http://www.loqh.cn" target="guanwang">
          <div class="aligin-center">官网</div>
        </a>
        <a href="http://template.loqh.cn" target="guanwang">
          <div class="aligin-center">网页模板</div>
        </a>
        <a href="http://blog.loqh.cn" target="guanwang">
          <div class="aligin-center">博客</div>
        </a>
        <a href="http://www.loqh.cn/apps" target="guanwang">
          <div class="aligin-center">个人应用</div>
        </a>

        <a href="http://framework.loqh.cn" target="guanwang">
          <div class="aligin-center">开发架构</div>
        </a>
        <a href="http://www.loqh.cn" target="guanwang">
          <div class="aligin-center">SamsBuild</div>
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
