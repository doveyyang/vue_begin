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