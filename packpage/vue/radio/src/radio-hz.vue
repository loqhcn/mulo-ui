<template>
  <span class="mulo-radio-hz" @click="tocheck">
    <img v-if="checked==value" :src="icon_selected" class="mulo-radio-icon-hz" alt />
    <img v-else :src="icon_select_off" class="mulo-radio-icon-hz" alt />
    <span class="radio-hz-stxt">
      <slot>{{value}}</slot>
    </span>
  </span>
</template>

<script>
import icon_selected from "./../../../assets/image/radio/select-on.png";
import icon_select_off from "./../../../assets/image/radio/select-off.png";
export default {
  data() {
    return {
      icon_selected: icon_selected,
      icon_select_off: icon_select_off
    };
  },
  name: "m-radio-hz",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    value: {
      default: 0
    },
    checked: {
      default: false
    }
  },
  created(){
      
  },
  methods: {
    tocheck() {
      this.$emit("change", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.mulo-radio-icon-hz {
  width: 2.8vw;
  height: 2.8vw;
}
.mulo-radio-hz {
}
.radio-hz-stxt {
  font-size: 4.27vw;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(27, 27, 27, 1);
  line-height: 5.33vw;
  margin-left: 2.13vw;
}
</style>