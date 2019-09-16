<template>
  <div>
      <h1>设计图工具</h1>

      <!-- 显示图片 -->
      <div>
          <img src="./../../../assets/logo.png" alt="">
      </div>
      <input type="file" @change="change" name="upfile" id="upfile">上传图片

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    change(e) {
      if(!window.FileReader){
        return alert('不支持FileReader 请更换浏览器');
      }
      console.log(e);

    }
  },
};
</script>

<style lang="scss" scoped>
     
</style>