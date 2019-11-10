[[toc]]

## 栅格系统


## 布局容器 .container
:::demo
```html
<template>
  <div class="container">
        <div class="row">
            <div v-for="x in 24" :key="x" class="col-1 demo-div"></div>
        </div>
         <div class="row">
            <div class="col-6 demo-div"></div>
            <div class="col-6 demo-div"></div>
            <div class="col-6 demo-div"></div>
            <div class="col-6 col-xl-24  demo-div"></div>
        </div>
    </div>
</template>
<style>
  
</style>
```
:::

## 网格类
- 借鉴Bootstrap网格系统 以下 5 个类:
- **.col**- 针对所有设备
- **.col-sm**- 平板 - 屏幕宽度等于或大于 576px
- **.col-md**- 桌面显示器 - 屏幕宽度等于或大于 768px)
- **.col-lg**- 大桌面显示器 - 屏幕宽度等于或大于 992px)
- **.col-xl**- 超大桌面显示器 - 屏幕宽度等于或大于 1200px)
:::demo
```html
<template>
  <div class="container">
        <div class="row">
            <div v-for="x in 24" :key="x" class="col-1 demo-div"></div>
        </div>
         <div class="row">
            <div class="col-6 demo-div"></div>
            <div class="col-6 demo-div"></div>
            <div class="col-6 demo-div"></div>
            <div class="col-6 col-xl-24  demo-div"></div>
        </div>
    </div>
</template>
<style>
  
</style>
```
:::