## 安装配置Mulo UI
~~~html
 npm i mulo-ui -S
~~~
## 安装sass, 所有组件的样式都依赖于sass
~~~html
 npm i node-sass sass-loader -D
~~~
## 全局安装, 引入所有组件
```javascript
import MuloUiPc from 'mulo-ui/packpage/vuepc'
Vue.use(MuloUiPc);
```

## 按需引入
```javascript
// 引入单个组件示例
import Button from 'mulo-ui/packpage/vuepc/button'
Vue.use(Button);
```


