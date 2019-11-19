<template>
  <div class="container-full color-info-bg">
    <div class="row item-padding-5">
      <div class="col-md-12">
        <div class="panel">
          <div class="panel-title">普通表格</div>
          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="x in 4" :key="x">
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                  <button class="btn btn-success">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-12">
        <div class="panel">
          <div class="panel-title">带边框的表格</div>
          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="x in 4" :key="x">
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                  <button class="btn btn-success">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-12">
        <div class="panel">
          <div class="panel-title">带边框的表格</div>
          <table class="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="x in 4" :key="x">
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                  <button class="btn btn-success">编辑</button>
                  <button class="btn btn-danger">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
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