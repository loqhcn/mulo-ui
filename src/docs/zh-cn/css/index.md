## 样式说明

## 1,安装mulo ui

## 2,安装sass
引入 
```html
    import 'mulo-ui/packpage/theme_default/src/index.scss'
```

## 按需引入
各个样式组件位于 node_modules/mulo-ui/packpage/theme_default/src
直接引入一份基础库

## 多端适配方案
样式采用 
pc下使用 1920宽font-size=16px为基础,进行各个屏幕大小的适配
栅格布局适配

### 移动端适配
纯移动端应用:
引入mobile.css覆盖pc样式中的尺寸样式
移动端以 750/40, 1rem=18.75px为标准,引入reset.js文件进行自动适应屏幕







