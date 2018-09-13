//入口文件

import Vue from 'vue'

//导入 Mint-UI中的组件
import{Header} from 'mint-ui'

//导入mui的样式
import './lib/mui/css/mui.min.css'

Vue.component('mt-header',Header)

//导入app根组件
import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app)
})  