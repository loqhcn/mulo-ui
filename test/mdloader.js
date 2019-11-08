var fs = require('fs');
const path = require('path')



var mdLoader = require('../src/utils/md-loader-mulo/index')


mdpath = path.resolve(__dirname, '../src/docs/zh-cn/css/test.md');
var testmd = fs.readFileSync(mdpath, 'utf-8');


var res = mdLoader(testmd);

console.log(res);

