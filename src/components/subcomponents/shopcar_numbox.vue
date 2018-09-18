<template>

        <!-- 我们不知道什么时候能够拿到max值，但是总会拿到，会得到一个真正的max值 -->
        <!-- 我们可以使用watch属性来监听，父组件传递过来的max值，不管watch会被触发多少次，但是最后一次肯定是一个合法的max数值 -->
       <div class="mui-numbox" data-numbox-min='1' style="height:25px">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref='numberbox' readonly/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

        <!-- 子组件什么时候把数据传递给父组件 -->
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default{
    mounted() {
        mui('.mui-numbox').numbox()
        // debugger
        // console.log(this.initcount)
    },
    methods:{
        countChanged(){
            //数量改变了

            // console.log(nvalue)

            //每当数量改变，则立即把最新的数量同步到购物车的store中，覆盖之前的数量值
            this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numberbox.value})
        }
    },
    props:[
        'initcount','goodsid'
    ],
    watch:{       
    }
}
    
</script>

<style lang="scss" scoped>

</style>

