<template>
  <div class>
    <div class="components-doc flex">
      <!-- 组件列表 -->
      <div class="components-menus flex column" :style="{top:`${headerHeight}px`}">
        
        <template v-for="(groupInfo,index_group) in menus" >
          <div :key="index_group+'group'" class="cm-row cm-row-title">{{groupInfo.title}}</div>
          <router-link v-for="(li,index) in groupInfo.menus" :key="index+'_'+index_group" :to="`/index/css-doc/${li.path}`" class="cm-row">{{li.name}}</router-link>
        </template>
      </div>
      <div class="doc-detail">
        <router-view :style="{'margin-left':`${menuWidth}px`}"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import pageRule from './../../nav_css.config'
export default {
  mounted() {
    //文档的位置
    this.headerHeight = document.querySelector(".mulo-ui-header").offsetHeight;
    this.menuWidth = document.querySelector(".components-menus").offsetWidth;

    console.log(this.menus)
  },
  data() {
    return {
      headerHeight: 0,
      menuWidth: 0,
      menus:pageRule['zh-cn']
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