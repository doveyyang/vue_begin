<template>

        <!-- 我们不知道什么时候能够拿到max值，但是总会拿到，会得到一个真正的max值 -->
        <!-- 我们可以使用watch属性来监听，父组件传递过来的max值，不管watch会被触发多少次，但是最后一次肯定是一个合法的max数值 -->
       <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref='numberbox'/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>

        <!-- 子组件什么时候把数据传递给父组件 -->
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default{
    mounted() {
        mui('.mui-numbox').numbox()
        console.log(this.max)
    },
    methods:{
        countChanged(){
            //每当文本框的数据被修改的时候， 立即把最新的数据，通过事件调用，传递给父组件
            // console.log( this.$refs.numberbox.value);
            this.$emit('getcount',parseInt(this.$refs.numberbox.value))
        }
    },
    props:[
        'max'
    ],
    watch:{
        //使用JS API 设置 numbox的最大值
        'max':function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    }
}
    
</script>

<style lang="scss" scoped>

</style>

