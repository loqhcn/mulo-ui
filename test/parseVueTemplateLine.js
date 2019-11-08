const { parse } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');
const genStylesCode = require('vue-loader/lib/codegen/styleInjection')
module.exports = function (source) {
    const descriptor = parse({
        source,
        compiler: compiler,
        needMap:false,
    })
    
    const styleCode = genStylesCode(
        {
            resourceQuery:[]
        },
        descriptor.styles,
        false,
        false,
        (p)=>{
            console.log(p);
        },
        false,
        false // needs explicit injection?
      )
    return {
        descriptor,
        styleCode
    }
}