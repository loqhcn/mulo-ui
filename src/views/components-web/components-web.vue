<template>
  <div class="">
    <div class="components-doc flex">
      <!-- 组件列表 -->
      <div class="components-menus flex column" :style="{top:`${headerHeight}px`}">
        <div class="cm-row cm-row-title">基础组件</div>
        <router-link to="/index/components-web/demodoc" class="cm-row">演示文档</router-link>

        <router-link to="/index/components-web/radios" class="cm-row">radios选择</router-link>
        <router-link to="/index/components-web/button" class="cm-row">按钮</router-link>
        <router-link to="/index/components-web/layer" class="cm-row">弹出层</router-link>
        <router-link to="/index/components-web/message-box" class="cm-row">提示消息</router-link>

        <div class="cm-row cm-row-title">弹出层组件</div>
        <router-link to="/index/components-web/radios" class="cm-row">radios选择</router-link>
        <router-link to="/index/components-web/button" class="cm-row">按钮</router-link>
        <router-link to="/index/components-web/layer" class="cm-row">弹出层</router-link>
        <router-link to="/index/components-web/message-box" class="cm-row">提示消息</router-link>
        
      </div>

      <div class="doc-detail col-16">
    
        <router-view :style="{'margin-left':`${menuWidth}px`,'margin-top':`${headerHeight}px`}"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.headerHeight = document.querySelector(".mulo-ui-header").offsetHeight;
    this.menuWidth = document.querySelector('.components-menus').offsetWidth
  },
  data() {
    return {
      headerHeight: 0,
      menuWidth:0,
    };
  }
};
</script>

<style lang="scss" scoped>
.components-doc {
  height: 100%;
}
.components-menus {
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  text-align: left;
  border-right: 1px solid #d1d1d1;
  width: unset;
}
.cm-row {
  font-size: 1.2rem;
  color: rgb(69, 90, 100);
  line-height: 2rem;
}
.cm-row-title {
  color: #aeaeae;
  font-size: 1rem;
}
.components-body {

  margin-top: 1rem;
  flex: 1;
}
.doc-detail {
  padding: 0.5rem;
  box-sizing: border-box;
}
.router-link-active {
  color: red;
}
</style>