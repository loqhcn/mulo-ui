<template>
    <div class="apitool-projects">

          <div class="project-item">
              <div class="project-row" @click="detail(li.id)" v-for="(li,index) in list" :key="index">{{li.name}}</div>
              <button @click="appRoute.go('/apitool/projects_create')">创建</button>
          </div>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created () {
           this.getList();
        },
        data() {
            return {
                list: []
            }
        },
        methods: {
            getList() {
               this.$http_apitool.post('/apitool/project/list').then(res=>{
                   if (res.errno) {
                       this.$toast(res.msg);
                       return;
                   }
                   this.list = res.data.list;
               });
            },
            detail(id){
                this.appRoute.go('/apitool/projects_detail',{id:id})
            }
        },
    }
</script>

<style lang="scss" scoped>
.apitool-projects{

}
</style>