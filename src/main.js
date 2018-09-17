//入口文件

import Vue from 'vue'
import moment from 'moment'
//导入路由的包
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
   return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 设置访问路径
Vue.http.options.root = '';
Vue.http.options.emulateJSON = true;
// Vue.http.options.root = 'http://vue.studyit.io';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';



//导入 Mint-UI中的组件
//import{Header,Swipe, SwipeItem,Button,Toast,Lazyload} from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// Vue.use(Lazyload);
Vue.use(MintUI)

//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//安装图片预览插件
import VuePreview from 'vue-preview'

// defalut install
// Vue.use(VuePreview)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 20, bottom: 20},
    captionEl: true,
    fullscreenEl: true,
    shareEl: true,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: true
  })

// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.component(Toast.name,Toast)

//导入自己的router.js 路由模块
import router from './router.js'
//导入app根组件
import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router , //挂载路由对象
})