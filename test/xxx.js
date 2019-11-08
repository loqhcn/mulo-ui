import { render, staticRenderFns } from "./demo-mobile-fiexd.md?vue&type=template&id=58f3d708&"     
var script = {}


/* normalize component */
import normalizer from "!../../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (module.hot) {
  var api = require("D:\\work\\vue\\mulo-ui\\node_modules\\_vue-hot-reload-api@2.3.3@vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('58f3d708')) {
      api.createRecord('58f3d708', component.options)
    } else {
      api.reload('58f3d708', component.options)
    }
    module.hot.accept("./demo-mobile-fiexd.md?vue&type=template&id=58f3d708&", function () {       
      api.rerender('58f3d708', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/docs/zh-cn/css/demo-mobile-fiexd.md"
export default component.exports