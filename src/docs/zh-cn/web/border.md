

## Border 边框

我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。

### 边框

我们提供了以下几种边框样式，以供选择。

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">名称</td>
      <td class="text">粗细</td>
      <td class="line">举例</td>
    </tr>
    <tr>
      <td class="text">实线</td>
      <td class="text">1px</td>
      <td class="line">
        <div></div>
      </td>
    </tr>
    <tr>
      <td class="text">虚线</td>
      <td class="text">2px</td>
      <td class="line">
        <div class="dashed"></div>
      </td>
    </tr>
  </tbody>
</table>

### 圆角

我们提供了以下几种圆角样式，以供选择。

<o-row :gutter="12" class="demo-radius">
  <o-col :span="6" :xs="{span: 12}">
    <div class="title">无圆角</div>
    <div class="value">border-radius: 0px</div>
    <div class="radius"></div>
  </o-col>
  <o-col :span="6" :xs="{span: 12}">
    <div class="title">小圆角</div>
    <div class="value">border-radius: {{borderRadiusSmall}}</div>
    <div 
      class="radius" 
      :style="{ borderRadius: borderRadiusSmall }"
    ></div>
  </o-col>
  <o-col :span="6" :xs="{span: 12}">
    <div class="title">大圆角</div>
    <div class="value">border-radius: {{borderRadiusBase}}</div>
    <div 
      class="radius"
      :style="{ borderRadius: borderRadiusBase }"
    ></div>
  </o-col>
  <o-col :span="6" :xs="{span: 12}">
    <div class="title">圆形圆角</div>
    <div class="value">border-radius: 30px</div>
    <div class="radius radius-30"></div>
  </o-col>
</o-row>

### 投影

我们提供了以下几种投影样式，以供选择。

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowBase }"
></div>
<span class="demo-shadow-text">基础投影 box-shadow: {{boxShadowBase}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLight }"
></div>
<span class="demo-shadow-text">浅色投影 box-shadow: {{boxShadowLight}}</span>
