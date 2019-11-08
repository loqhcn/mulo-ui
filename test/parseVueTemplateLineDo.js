const loader = require( './parseVueTemplateLine' )




res = loader(`
<template>
<div>
    <div class="xxxx">asfadf</div>
 
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.xxxx{
    color:red;
}
</style>
`);
console.log(res)