# 这是一个Demo项目

## 利用了MintUI、VUE项目

### Webpack构建工具

#### 项目提示

## 传统方式提交代码
1. git add .
2. git commit -m '提交信息'
3. git push

## 制作首页App组件
1. 完成Header区域，使用过的是Mint-UI的Header组件
2. 制作底部的Tabbar区域，使用的是MUI的Tarbar.html
    + 扩展图标的css样式，复制到项目中
    + 拷贝字体库ttf文件，到项目中
    + 为购物车添加 样式
3. 要在中间区域放置一个Router-view 来展示路由匹配到的组件

## 改造tabbar为 router-link

## 设置路由高亮

## 点击tabbar中的路由链接，展示对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1. 获取数据 使用vue-resource
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据要保存到data中
4. 然后渲染到界面上

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1. 绘制界面 使用MUI中的media-list
2. 使用vue-resource获取数据
3. 渲染真实数据

## 实现 新闻资讯列表跳转到新闻详情
1. 把列表中的每一项改造为 router-link，同时，在跳转的时候应该提供唯一的ID标识符
2. 创建新闻详情的组件页面， NewInfo.vue
3. 在 路由模块中，将 新闻详情展示出来

## 实现 新闻详情 的页面布局和渲染

## 创建一个单独的评论子组件
1. 先创建一个单独的comment.vue的组件模板
2. 在需要使用的comment组件的页面中，先手动导入comment组件
    1. import comment form './comment.vue'
3. 在父组件中，使用‘comments’属性，

## 获取所有的评论数据显示到页面中


## 实现点击加载更多评论的功能
1. 为加载更多按钮绑定点击事件，在事件中去请求 下一页的数据
2. 点击加载更多，让pageIndex++，然后重新调用一下this.getComments()方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，应该让老数据调用数据的concat方法，拼接上新的数数组


## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户：评论内容不可为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给 服务器
5. 当发表评论OK之后，重新刷新列表，以查看最新的评论
    1. 如果调用 getpinglun方法重新刷新评论列表的话，可能只能得到最后一页的数据，前几页的评论获取不到
    2. 换一种思路，当评论成功之后，在客户端，手动拼接成一个最新的评论对象，然后 调用 数组的unshift方法，把最新的评论，追加到 data中的comments的开头，

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制图片列表组件页面结构
1. 制作 顶部的滑动条
2. 制作图片列表

### 制作顶部滑动条的注意：
    1.  需要借助于MUI中的 tab-top-webview-main.html
    2.  需要把slider中的mui-fullscreen类去掉
    3.  滑动条无法正常触发滑动，通过检查官方文档，发现这是一个js组件，需要被初始化，
        +  导入mui.js
        +  调用官方提供的方式去初始化：
        ```
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        ```
    4. 初始化 滑动条的时候，导入的mui.js，但是控制台报错：‘Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them’
        1. 估计是：mui.js中用到了 以上变量，但是webpack中bundle.js中，默认是启用严格模式的，所以这两者冲突了
            + 解决方案：
                一、把 mui。js中的非严格模式的代码改掉，但是不现实，
                二、在webpack中禁用严格模式  -- 'https://github.com/genify/babel-plugin-transform-remove-strict-mode'
    5. 刚进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化 滑动条，必须要等 DOM元素 加载完毕，所以我们把初始化滑动条的代码放到mounted中
    6. 当 滑动条 调试OK之后，发现，tabbar无法正常工作，这是，我们需要把每个tabbar按钮的样式中的 'mui-tab-item'重新修改名称
    7. 获取所有分类，并渲染 分类列表

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现场的 组件 'lazy-load'
2. 根据 'lazy-load'的使用文档，尝试使用
3. 渲染图片列表

### 实现了 图片列表的 懒加载改造和 样式美化

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造li成 router-link的时候，需要使用 tag属性指定要渲染为 哪种元素

## 实现详情页面的布局和美化，同时获取数据

## 实现 图片详情中 缩略图的功能
1. 实现 插件 vue-preview 这个缩略图插件
2. 获取到所有的图片列表，然后使用v-for指令渲染数据
3. 注意：img标签上的class不能去掉
4. 注意：每个图片数据对象中，必须有w和h属性

## 绘制 商品列表 页面基本结构

## 尝试在手机上 进行项目的预览和测试
1. 要保证手机可以正常运行
2. 保证手机和开发项目的电脑，处于同一个wifi环境中，手机可以访问到电脑的IP
3. 打开自己的项目中 package.json文件中，在dev脚本中，添加一个 --host 指令，把当前电脑的主机的WIFI IP地址，设置为--host的指令值，如何查看自己电脑的IP呢，
4. 