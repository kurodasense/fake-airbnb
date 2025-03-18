# fake-airbnb

基于 vite+react+react-router+@reduxjs/toolkit+axios+styled-components+less 的仿 airbnb 网站，用于练手 react 相关知识。为什么选择 airbnb ？因为它页面布局简单。

## 技术亮点

### 数据的管理和请求

基于 axios 实现的网络请求封装，通过 class 对 axios 实例进行封装。

### svg 图标的设置

每一个 svg 图标都看作是一个单独的 react 组件，svg 图标的格式可以通过 style 来设置，比如：

```react
const IconAvatar = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        "display: block; height: 32px; width: 32px; fill: currentcolor"
      )}
    >
      <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
    </svg>
  );
});

export default IconAvatar;
```

### css 的统一配置

#### 公共 css 格式的封装

使用 styled-components 的 theme 功能，设置统一的如 color、text 等变量。

### 页面组件实现

#### header
##### profile 中 panel 的展示和隐藏

点击 profile 图标时会显示 panel；而如果点击外部内容时，就要对 panel 隐藏。该逻辑通过 useEffect 来监听实现

```js
useEffect(() => {
    function handleClickOutside(event) {
        // 判断点击的目标是否在 .profile 或 .panel 内部，如果不是则隐藏面板
        if (
            !profileRef?.current?.contains(event.target) &&
            !panelRef?.current?.contains(event.target)
        ) {
            setShowPanel(false);
        }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, []);
```

#### content
##### item 组件的实现
不等宽高的图片实现统一宽高的显示：
* 给`.cover`设置一个`padding: 66.66% 8px 0`，使其形成一个类似于占位符的效果。然后再让`img`通过绝对定位的方式给把 padding 区域给覆盖住，然后设置`width: 100%;height: 100%;`来实现图片的统一宽高显示。
##### 每个 section-tab 的数据展示
请求总的数据，然后通过 filter 来过滤出对应的数据。

##### scroll-view 的滚动图封装实现

![动画 (0)](https://raw.githubusercontent.com/kurodasense/cloudimg/master/img/动画 (0).gif)

实现类似上图的效果，scroll-view 可以接收一个任意类型的组件数组，并且会根据左右边是否还有数据来自动显示左右按钮，点击按钮时会滚动一个组件宽度的距离。

scroll-view 实现的主要细节就分为4个：

1. 首次渲染时，如果组件数组超出父组件宽度，就得 hidden ，并且显示右按钮。
2. 点击按钮时，能滑动一个子组件宽度的距离。
3. 能根据左右边是否还有内容来显示左右按钮。
4. 左右按钮的布局。

**首次渲染时，右按钮的显示逻辑**

首次渲染时，如果组件宽度超出父组件，那么就应该显示右按钮。点击右按钮会向右滑动一个子组件宽度距离，这时因为左边有了内容，所以会显示左按钮。

所以，父组件必须要设置`overflow: hidden;`，然后这套逻辑可以根据是否有可滚动距离来判断。

```js
const scrollWidth = scrollContentRef.current.scrollWidth; // 超出父组件的宽度，即溢出的宽度
const clientWidth = scrollContentRef.current.clientWidth; // 父组件的宽度
totalDistanceRef.current = scrollWidth - clientWidth; // 记录总可滚动距离
setShowRightBtn(totalDistanceRef.current > 0); // 判断是否还有可滚动距离
```

**按钮的点击逻辑与点击完毕的按钮显示逻辑**

通过一个索引 posIndex 来记录在可见范围内第一个组件元素的显示：

* 点击右按钮时，就是将以第一个元素的起点，向左平移了1个宽度，第一个元素移到了不可见范围，可见范围内的第一个元素为第二个元素；再点击一次，就是向左平移2个宽度，第一、二个元素移到了不可见范围，可见范围内的第一个元素为第三个元素。
* 同理，左按钮的逻辑就是从左边不可见范围内的最后一个元素移到了可见范围内并变成其第一个元素，该滑动是右滑动。

所以当点击按钮时，如果是右按钮就为`newIndex = posIndex + 1`，否则就是 `newIndex = posIndex - 1`。此时已经记录为新元素，所以这时就获取它相对于父元素容器的左偏移`offsetLeft`，并通过`translate`移动`offsetLeft`距离。

点击完毕后，还应判断左右侧是否还有内容来相应的展示左右按钮。

* 左按钮：判断`scrollContentRef.current.children[newIndex]`的`offsetLeft`是否为0，即左边不可见范围都没有元素了就不显示左按钮。
* 右按钮：判断上述的`offsetLeft`是否小于`totalDistanceRef`，即总的可滚动距离是否全都在左侧。
