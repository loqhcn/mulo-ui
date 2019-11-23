## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<o-container>`：外层容器。当子元素中包含 `<o-header>` 或 `<o-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<o-header>`：顶栏容器。

`<o-aside>`：侧边栏容器。

`<o-main>`：主要区域容器。

`<o-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<o-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<o-container>`。
:::

### 常见页面布局

:::demo
```html
<o-container>
  <o-header>Header</o-header>
  <o-main>Main</o-main>
</o-container>

<o-container>
  <o-header>Header</o-header>
  <o-main>Main</o-main>
  <o-footer>Footer</o-footer>
</o-container>

<o-container>
  <o-aside width="200px">Aside</o-aside>
  <o-main>Main</o-main>
</o-container>

<o-container>
  <o-header>Header</o-header>
  <o-container>
    <o-aside width="200px">Aside</o-aside>
    <o-main>Main</o-main>
  </o-container>
</o-container>

<o-container>
  <o-header>Header</o-header>
  <o-container>
    <o-aside width="200px">Aside</o-aside>
    <o-container>
      <o-main>Main</o-main>
      <o-footer>Footer</o-footer>
    </o-container>
  </o-container>
</o-container>

<o-container>
  <o-aside width="200px">Aside</o-aside>
  <o-container>
    <o-header>Header</o-header>
    <o-main>Main</o-main>
  </o-container>
</o-container>

<o-container>
  <o-aside width="200px">Aside</o-aside>
  <o-container>
    <o-header>Header</o-header>
    <o-main>Main</o-main>
    <o-footer>Footer</o-footer>
  </o-container>
</o-container>

<style>
  .o-header, .o-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .o-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .o-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .o-container {
    margin-bottom: 40px;
  }
  
  .o-container:nth-child(5) .o-aside,
  .o-container:nth-child(6) .o-aside {
    line-height: 260px;
  }
  
  .o-container:nth-child(7) .o-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<o-container style="height: 500px; border: 1px solid #eee">
  <o-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <o-menu :default-openeds="['1', '3']">
      <o-submenu index="1">
        <template slot="title"><i class="o-icon-message"></i>导航一</template>
        <o-menu-item-group>
          <template slot="title">分组一</template>
          <o-menu-item index="1-1">选项1</o-menu-item>
          <o-menu-item index="1-2">选项2</o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group title="分组2">
          <o-menu-item index="1-3">选项3</o-menu-item>
        </o-menu-item-group>
        <o-submenu index="1-4">
          <template slot="title">选项4</template>
          <o-menu-item index="1-4-1">选项4-1</o-menu-item>
        </o-submenu>
      </o-submenu>
      <o-submenu index="2">
        <template slot="title"><i class="o-icon-menu"></i>导航二</template>
        <o-menu-item-group>
          <template slot="title">分组一</template>
          <o-menu-item index="2-1">选项1</o-menu-item>
          <o-menu-item index="2-2">选项2</o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group title="分组2">
          <o-menu-item index="2-3">选项3</o-menu-item>
        </o-menu-item-group>
        <o-submenu index="2-4">
          <template slot="title">选项4</template>
          <o-menu-item index="2-4-1">选项4-1</o-menu-item>
        </o-submenu>
      </o-submenu>
      <o-submenu index="3">
        <template slot="title"><i class="o-icon-setting"></i>导航三</template>
        <o-menu-item-group>
          <template slot="title">分组一</template>
          <o-menu-item index="3-1">选项1</o-menu-item>
          <o-menu-item index="3-2">选项2</o-menu-item>
        </o-menu-item-group>
        <o-menu-item-group title="分组2">
          <o-menu-item index="3-3">选项3</o-menu-item>
        </o-menu-item-group>
        <o-submenu index="3-4">
          <template slot="title">选项4</template>
          <o-menu-item index="3-4-1">选项4-1</o-menu-item>
        </o-submenu>
      </o-submenu>
    </o-menu>
  </o-aside>
  
  <o-container>
    <o-header style="text-align: right; font-size: 12px">
      <o-dropdown>
        <i class="o-icon-setting" style="margin-right: 15px"></i>
        <o-dropdown-menu slot="dropdown">
          <o-dropdown-item>查看</o-dropdown-item>
          <o-dropdown-item>新增</o-dropdown-item>
          <o-dropdown-item>删除</o-dropdown-item>
        </o-dropdown-menu>
      </o-dropdown>
      <span>王小虎</span>
    </o-header>
    
    <o-main>
      <o-table :data="tableData">
        <o-table-column prop="date" label="日期" width="140">
        </o-table-column>
        <o-table-column prop="name" label="姓名" width="120">
        </o-table-column>
        <o-table-column prop="address" label="地址">
        </o-table-column>
      </o-table>
    </o-main>
  </o-container>
</o-container>

<style>
  .o-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .o-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `o-header` 或 `o-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |