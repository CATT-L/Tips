# 适配 ios web app

本功能适用于 iOS/iPad OS 的 safari 浏览器;

可在将网页"添加到桌面"后, 隐藏地址栏全屏显示, 看起来就和app一样, 因此被称作 iOS Web App;



### 操作流程

- safari 访问目标页面
- 点击分享图标 -> 添加到主屏幕 -> 添加
- 点击主屏幕添加好的图标进入
- 此时访问网页, 即为 web app 形态



注意事项:

下方所有配置, 都只在 "添加到主屏幕" 的时候生效, 对应已经添加好又更新了代码(图标/标题/颜色), 只能去浏览器里重新操作 "添加到主屏幕", 才能更新。

也就是说无法自动更新图标，可以断了这个念头。



### 实现方式

在html head标签内加入以下内容

```html
<meta name="viewport"
    content="width=device-width,height=device-height,viewport-fit=cover,initial-scale=1,maximum-scale=1,user-scalable=0">

<meta name="theme-color" content="#569AFE">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />

<link href="<%= BASE_URL %>icon.jpg" rel="apple-touch-icon-precomposed">
<meta name="apple-mobile-web-app-title" content="<%= VUE_APP_TITLE %>"> 
```



### 内容解释

- 设置状态栏颜色

  ```html
  <meta name="theme-color" content="#569AFE">
  ```

  这个在浏览器打开也能着色

  

- 设置为全屏打开 (添加桌面图标后进入的效果, 即 ios web app 效果)

  ```html
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-touch-fullscreen" content="yes" />
  ```

- 设置顶部状态条

  ```html
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  ```

  - default 默认, 受 theme-color 支配

  - black 黑色

  - black-translucent 透明, 网页内容会跑到状态栏底下, 如果不做好margin则会被刘海和状态图标遮挡,像这样

    ![1669097982587](./assets/%E9%80%82%E9%85%8D%20ios%20web%20app/1669097982587.png)

- 设置图标和默认标题

  ```html
  <link href="<%= BASE_URL %>icon.jpg" rel="apple-touch-icon-precomposed">
  <meta name="apple-mobile-web-app-title" content="<%= VUE_APP_TITLE %>"> 
  ```

  - 图标
    - 若不设置图标, 会自动截取当前页面方形范围来当作图标;
    - 若为透明图层, 会生成一个白底/灰底(暗黑模式), 但在点开和关闭的图标动画播放过程, 是透明底, 看起来会很割裂, 所以不要用透明图层;
  - 默认标题
    - 该标题会在"添加到桌面"时, 作为默认填充, 用户可以编辑标题

