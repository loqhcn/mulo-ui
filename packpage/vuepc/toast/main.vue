<template>
  <div v-show="visible" class="mulo-toast" :class="center">{{msg}}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      center: 0,
      visible: false,
      duration: 3000,
      closed: false,
      //显示位置 支持 center,top,bottom,
      position:'center',
    };
  },
  methods: {
    //显示完成后移除组件
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    //关闭
    close() {
      this.visible = false;
    },
    //显示时间控制
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    // esc关闭消息
    keydown(e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  }
};
</script>

<style  scoped>
.mulo-toast {
  background-color: #00000080;
  color: white;
  font-size: 16px;
  padding: 2px 5px;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.mulo-toast.center {
  text-align: center;
}

</style>