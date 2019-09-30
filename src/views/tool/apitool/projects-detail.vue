<template>
    <div>
 
<div class="flex space-between">
      <div class="title">项目详情</div>
      <div>
        <button @click="del" class="btn">删除项目</button>
        <router-link to="/apitool"><button class="btn btn-back">返回</button></router-link>
      </div>
    </div>
        <div class="flex">
            
            <div class="col8">
                api列表
            </div>
            <div class="col16">

            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:this.$route.query.id,
            }
        },
        methods: {
            del() {
                if(!confirm('删除')){
                    return;
                }
                this.$http_apitool.post('/apitool/project/del',{id:this.id }).then(res=>{
                    if (res.errno) {
                        this.$toast(res.msg);
                        return;
                    }
                    alert('删除成功');
                    this.appRoute.back();
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>