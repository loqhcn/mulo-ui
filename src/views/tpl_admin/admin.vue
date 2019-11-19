<template>
    <div class="mulo-admin-login">
        后台模板

        <router-link to="/tpl_admin/login/login">后台登录</router-link>
        <router-link to="/tpl_admin/menu/menu">菜单栏目</router-link>
        <router-link to="/tpl_admin/form/form">表单</router-link>
        <router-link to="/tpl_admin/table/table">表格</router-link>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.mulo-admin-login{
    &>*{
        display: block;
    }
}
</style>