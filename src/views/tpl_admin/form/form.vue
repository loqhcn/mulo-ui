<template>
  <div class="color-default-bg">
    <div class="col-20 margin-auto card">
      <div class="form form-label-inline">
        <div class="form-item">
          <label class="form-item-lavel">姓名:</label>
          <input type="text" name="name" class="form-control" />
        </div>
        <div class="form-item">
          <label>电话:</label>
          <input type="text" name="name" class="form-control" />
        </div>
        <div class="form-item">
          <label>密码:</label>
          <input type="password" name="name" class="form-control" />
        </div>
        <div class="form-item">
          <label>详细地址:</label>
          <textarea class="form-control" placeholder="请输入详细地址"></textarea>
        </div>
        <div class="form-item">
          <label>选择食品:</label>
          <input type="checkbox" name="foods" />蛋糕
          <input type="checkbox" name="foods" />冰淇淋
          <input type="checkbox" name="foods" />奶酪
        </div>
        <div class="form-item">
          <label>状态:</label>
          <div class="form-item-content">
            <input type="radio" name="state" />正常
            <input type="radio" name="state" />不正常
          </div>
        </div>
        <div class="form-item">
          <button class="btn btn-success">保存</button>
          <button @click="$router.back()" class="btn btn-danger">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>