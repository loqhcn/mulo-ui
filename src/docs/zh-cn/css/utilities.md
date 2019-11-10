[[toc]]

## 常用宽高
- 百分比
- 宽: w5 w10 w15 ... w100
- 高: h5 h10 h15 ... h100


## 常用距离
-  可用范围1-20 , 1=0.1rem
- 例子 item-mt-10 当前容器的 直接 子元素 margin-top:1rem
- 例子 mt-1 当前元素 margin-top:0.1rem
### 简写规则
|  属性名称  | 简写  | demo |
|  ----  | ----  | ---- |
|margin|margin|margin-1 item-margin-10|
|margin-top|mt|mt-1 item-mt-10|
|margin-left|ml|ml-1 item-ml-10|
|margin-right|mr|mr-1 item-mr-10|
|margin-bottom|mb|mb-1 item-mb-10|
|padding|padding|padding-1 item-padding-10|
|padding-top|pt|pt-1 item-pt-10|
|padding-left|pl|pl-1 item-pl-10|
|padding-right|pr|pr-1 item-pr-10|
|padding-bottom|pb|pb-1 item-pb-10|
### 例子
:::demo
```html
<div class="col-md-24 flex wrap item-mt-3 item-ml-20">
    <div  class="btn" v-for="x in 10">按钮</div>
</div>
```
:::