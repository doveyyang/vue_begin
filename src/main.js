//入口文件

import Vue from 'vue'
import moment from 'moment'
//导入路由的包
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//注册Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

//每次进入网站，将内存中的购物车数据放在car中
var car = JSON.parse(localStorage.getItem('car')||'[]')

var store = new Vuex.Store({
    state:{
        //
        car:car,//将购物车中的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，咱们可以暂时将这个商品对象，设计成这个样子 
        //{id：商品ID，count：购买数量，price：商品单价，selectd：是否为选中}
    },
    mutations:{
        //this.$store.commit('方法名称','参数对象')

        addToCar(state,goodsinfo){

            // 添加购物车，保存到store中的car上
            // 1 如果购物车中，之前就应该有了这个对应的商品了，那么只需要更新数量
            // 2 如果没有，则直接把商品数据push到car中即可
            
            var flag = false; //假设没有在购物车中找到对应的商品
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt( goodsinfo.count )
                    flag = true;
                    return true
                }
            })

            // 如果最终循环完毕，得到的flag还是false，
            if(!flag){
                state.car.push(goodsinfo)
            }
            
            //当更新car之后，把car数组，存储到 localStorage中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中的数据
            //
            state.car.some(item=>{
                if(item.id === goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            //当修改完商品的数据之后，要更新数据
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            //根据ID，从store中的购物车删除对应的那条商品数据
            state.car.some((item,i)=>{
                if(item.id == id){
                    state.car.splice(i,1)
                    return true;
                }
            })
            // debugger
            //当修改完商品的数据之后，要更新数据
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })

            //把最新的 所有购物车商品的状态同步到store中
            localStorage.setItem('car',JSON.stringify(state.car))
        }
        
    },
    getters:{
        //this.$store.getters.***

        //相当于computed，也相当于filters
        getAllCount(state){
            var c = 0;
            state.car.forEach(item=>{
                c+=item.count
            })
            return c
        },
        getGoodsCount(state){
            // debugger
            var o = {}
            state.car.forEach(item=>{
                o[item.id] = item.count
            })
            return o;
        },
        getGoodsSelected(state){
            var o = {}
            // debugger
            state.car.forEach(item=>{
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,//勾选的数量
                amount:0 //勾选的总价
            }
            state.car.forEach(item =>{
                if(item.selected){
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})


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
    store, //挂载store对象
})