var mdLoader = require('../src/utils/md-loader-mulo/index')
var testmd = require('../src/docs/zh-cn/css')

console.log(testmd)
var res = mdLoader(`
## 罗戚洪

`);

console.log(res);

