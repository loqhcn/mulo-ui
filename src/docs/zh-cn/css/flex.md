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
        <div class="row  ">
            <h4>开始位置 .flex.start </h4>
            <div class="col-24 demo-div  flex start">
                <div class="demo-div"></div>
            </div>
            <h4> 居中.flex.center</h4>
            <div class="col-24 demo-div flex center">
                <div class="demo-div"></div>
            </div>
            <h4>末尾.flex.end</h4>
            <div class="col-24 demo-div flex end">
                <div class="demo-div"></div>
            </div>
            <h4>两端对齐，项目之间的间隔都相等 .flex.space-between</h4>
            <div class="col-24 demo-div flex space-between">
                <div v-for="x in 5" class="demo-div"></div>
            </div>
            <h4 class="col-24">.flex.space-around</h4>
            <h4 class="col-24">每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</h4>
            <div class="col-24 demo-div flex space-around">
                <div v-for="x in 5" class="demo-div"></div>
            </div>
        </div>
    </div>
</template>
```
:::


## 交叉轴上的对其方式

:::demo
```html
<template>
    <div class="container">
        <div class="row">
            <h4 class="col-24">开始位置 .flex.start-item </h4>
            <div class="col-8 demo-div flex start-item" style="height:6rem">
                <div v-for="x in 5" class="demo-div" :style="{height:`${x}rem`,'margin-left':'1rem'}"></div>
            </div>

            <h4 class="col-24">底部.flex.end-item</h4>
            <div class="col-8 demo-div flex end-item" style="height:6rem">
                <div v-for="x in 5" class="demo-div" :style="{height:`${x}rem`,'margin-left':'1rem'}"></div>
            </div>

            <h4 class="col-24">居中.flex.center-item</h4>
            <div class="col-8 demo-div flex center-item" style="height:6rem">
                <div v-for="x in 5" class="demo-div" :style="{height:`${x}rem`,'margin-left':'1rem'}"></div>
            </div>

            <h4 class="col-24">项目的第一行文字的基线对齐 .flex.baseline-item</h4>
            <div class="col-8 demo-div flex baseline-item" style="height:4rem">
                <div v-for="x in 4" class="demo-div" :style="{'margin-left':'1rem'}">
                    text
                </div>
                <div class="demo-div" :style="{'margin-left':'1rem','padding-top':'1rem'}">
                    text
                </div>
            </div>

            <h4 class="col-24">.flex.stretch-item</h4>
            <h4 class="col-24">如果项目未设置高度或设为auto 将占满整个容器的高度</h4>
            <div class="col-8 demo-div flex stretch-item" style="height:6rem">
                <div v-for="x in 5" class="demo-div" :style="{ 'margin-left':'1rem'}"></div>
            </div>
        </div>
    </div>
</template>
```
:::


## 多线轴上面的对其方式


:::demo
```html
<template>
    <div class="container">
        <div class="row">
            <h4 class="col-24">开始位置 .flex.start-content </h4>
            <div class="col-24 demo-div  flex wrap start-content" style="height:6rem">
                <div v-for="x in 10" class="demo-div col-6"></div>
            </div>

            <h4 class="col-24">末尾 .flex.end-content </h4>
            <div class="col-24 demo-div  flex wrap end-content" style="height:6rem">
                <div v-for="x in 10" class="demo-div col-6"></div>
            </div>

            <h4 class="col-24">居中 .flex.center-content </h4>
            <div class="col-24 demo-div  flex wrap center-content" style="height:6rem">
                <div v-for="x in 10" class="demo-div col-6"></div>
            </div>

            <h4 class="col-24">与交叉轴两端对齐 .flex.space-between-content </h4>
            <div class="col-24 demo-div  flex wrap space-between-content" style="height:6rem">
                <div v-for="x in 10" class="demo-div col-6"></div>
            </div>

            <h4 class="col-24">每根轴线两侧的间隔都相等 .flex.space-around-content </h4>
            <div class="col-24 demo-div  flex wrap space-around-content" style="height:6rem">
                <div v-for="x in 10" class="demo-div col-6"></div>
            </div>
            <h4 class="col-24">轴线占满整个交叉轴 .flex.stretch-content </h4>
            <div class="col-24 demo-div  flex wrap stretch-content" style="height:6rem">
                <div v-for="x in 10" class="demo-div col-6"></div>
            </div>
        </div>
    </div>
</template>
```
:::