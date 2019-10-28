<template>
  <div class="components-body">
    <div class="components-doc flex">
      <!-- 组件列表 -->
      <div class="components-menus flex column">
        <div class="cm-row cm-row-title">基础组件</div>
        <router-link to="/index/components/radios" class="cm-row">radios选择</router-link>
        <router-link to="/index/components/button" class="cm-row">按钮</router-link>
        <router-link to="/index/components/layer" class="cm-row">弹出层</router-link>
        <router-link to="/index/components/message-box" class="cm-row">提示消息</router-link>

        <div class="cm-row cm-row-title">弹出层组件</div>
        <router-link to="/index/components/radios" class="cm-row">radios选择</router-link>
        <router-link to="/index/components/button" class="cm-row">按钮</router-link>
        <router-link to="/index/components/layer" class="cm-row">弹出层</router-link>
        <router-link to="/index/components/message-box" class="cm-row">提示消息</router-link>
      </div>

      <div class="doc-detail col-16">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight:document.querySelector('.mulo-ui-header').offsetHeight,
    };
  }
};
</script>

<style lang="scss" scoped>
.components-doc {
  height: 100%;
}
.components-menus {
 
  height: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  text-align: left;
  border-right: 1px solid  #d1d1d1;;
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
  background-color: #fefefe;
  margin-top: 1rem;
  flex: 1;
}
.doc-detail{
  padding: .5rem;
  box-sizing: border-box;
}
.router-link-active {
  color: red;
  
}
</style>