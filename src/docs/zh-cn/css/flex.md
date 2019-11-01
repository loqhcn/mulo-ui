[[toc]]

# flex布局

## 基础使用
- .flex
- 后面的flex容器都需要带有flex类
:::demo
```html
<template>
    <div>
      <div class="flex  demo-container">
           <div class="demo-div">1</div>
            <div class="demo-div">2</div>
       </div> 
    </div>
</template>
```
:::

## 排列方式
- .flex.row .flex.row-reverse .row-reverse
:::demo
```html
<template>
    <div class="flex">
       <div>顺序排列</div>
       <div class="flex row demo-container">
           <div class="demo-div">1</div>
            <div class="demo-div">2</div>
       </div> 
        <div>倒序</div>
        <div class="flex row-reverse demo-container">
           <div class="demo-div">1</div>
            <div class="demo-div">2</div>
       </div> 

        <div>倒序</div>
        <div class="flex column demo-container-col">
           <div class="demo-div">1</div>
            <div class="demo-div">2</div>
       </div> 

        <div>倒序</div>
        <div class="flex column-reverse demo-container-col">
           <div class="demo-div">1</div>
            <div class="demo-div">2</div>
       </div> 
    </div>
</template>
```
:::

## 行内排不下如何换行
### 水电费收费
- nowrap 不换行,把元素挤进去
:::demo
```html
<template>
    <div class="container">
        <div class="row flex nowrap">
            <div v-for="x in 7" class="col-4 demo-div"></div>
        </div>
    </div>
</template>
```
:::

- wrap 换行，第一行在上方。
:::demo
```html
<template>
    <div class="container">
        <div class="row flex wrap">
            <div v-for="x in 7" class="col-4 demo-div"></div>
        </div>
    </div>
</template>
```
:::

- wrap-reverse 换行，第一行在下方。
:::demo
```html
<template>
    <div class="container">
        <div class="row flex wrap-reverse">
            <div v-for="x in 7" class="col-4 demo-div"></div>
        </div>
    </div>
</template>
```
:::

## 主轴上面的对其方式
:::demo
```html
<template>
    <div class="container">
        <div class="row flex wrap">
            <div v-for="x in 7" class="col-4 demo-div"></div>
        </div>
    </div>
</template>
```
:::

- wrap-reverse 换行，第一行在下方。
:::demo
```html
<template>
    <div class="container">
        <div class="row  ">
             <h4>开始位置 flex start </h4>
            <div  class="col-24 demo-div  flex start">
               <div class="demo-div"></div>
            </div>
             <h4> 居中.flex.center</h4>
            <div  class="col-24 demo-div flex center">
               <div class="demo-div"></div>
            </div>
             <h4>末尾.flex.end</h4>
            <div  class="col-24 demo-div flex end">
               <div class="demo-div"></div>
            </div>
             <h4>两端对齐，项目之间的间隔都相等 .flex.space-between</h4>
            <div  class="col-24 demo-div flex space-between">
               <div v-for="x in 5" class="demo-div"></div>
            </div>
             <h4>.flex.space-around</h4>
             <h4>每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</h4>
             <div  class="col-24 demo-div flex space-around">
               <div  v-for="x in 5"  class="demo-div"></div>
            </div>
        </div>
    </div>
</template>
```
:::