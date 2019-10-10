<template>
  <div class="mulo-btn-pc" :class="[
      type ? 'mulo-button--' + type : '',
      ]" >
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "o-button",
  props: {
      type: {
        type: String,
        default: 'default'
      },
  },
};
</script>

<style lang="scss" scoped>
.mulo-btn-pc {
  border: 0px;
  background-color: #fa4a80;
  box-sizing: border-box;
  padding: 2px 10px;
  font-size: 12px;
  color: white;
  border-radius: 5px;
}
.mulo-button--default{
    background-color: #fa4a80;
}
.mulo-button--denger{
    background-color: #f56c6c;
}
.mulo-button--info{
    background-color: #fa4a80;
}
</style>