var vueloader = require('vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin');


var ss = vueloader(`
<template>
    <div class="xxx11">
    content   
    </div>
 </template>
<style>
    .xxx11{
        color:red;
    }
</style>
`);
console.log(ss)