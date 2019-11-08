const { compileTemplate, compileStyle } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');


var source = `<style >
.xxx {
  color: red;
}
</style>`

const descriptor = compileStyle({
    source,
    compiler: compiler,
    map: false,
})

console.log(descriptor)