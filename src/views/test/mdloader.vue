<template>
    <div>
          {{lqh}}
    </div>
</template>

<script>
const mdLoader  = require("./../../utils/md-loader-mulo/index.js")

const  {
lqh,ws
}  = require("./../../utils/md-loader-mulo/test")



    export default {
        data() {
            return {
                md:'',
                lqh:lqh
            }
        },
        methods:{
            
        },
        created() {
           
 
        },
    }
</script>

