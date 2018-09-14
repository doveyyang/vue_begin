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




