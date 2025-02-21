# fake-airbnb

基于 vite+react+react-router+@reduxjs/toolkit 的仿 airbnb 网站，用于练手 react 相关知识。为什么选择 airbnb ？因为它页面布局简单。

## 技术亮点

### 数据的管理和请求

### svg 图标的设置
  
### css 的统一配置
theme 文件

#### 公共 css 格式的封装
  
### 页面组件实现

#### header
##### profile 中 panel 的展示和隐藏

##### 图片的引入

#### content
##### item 组件的实现
不等宽高的图片实现统一宽高的显示：
* 给`.cover`设置一个`padding: 66.66% 8px 0`，使其形成一个类似于占位符的效果。然后再让`img`通过绝对定位的方式给把 padding 区域给覆盖住，然后设置`width: 100%;height: 100%;`来实现图片的统一宽高显示。
##### 每个 section-tab 的数据展示
请求总的数据，然后通过 filter 来过滤出对应的数据。

##### scroll-view 的滚动图封装实现