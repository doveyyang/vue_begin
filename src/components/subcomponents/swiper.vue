<template>
    <div>

        <!-- 谁使用轮播图组件，则谁为我们传递lunbotulist -->
        <!-- lunbotulist应该是父组件向子组件传值 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.image">
                    <img :src="item.image" :class="{full:isFull}" alt="">
            </mt-swipe-item>           
        </mt-swipe>

        <!-- 为什么 商品评论中的轮播图那么丑 -->
        <!-- 首页中的图片，宽高是100%，但是详情页面的轮播图图片，如果也使用宽高为100%的话，页面不好看 -->
        <!-- 商品详情页的轮播图，期望 高度是100%，但是宽度自适应 -->
        <!-- 经过分析，得到问题的原因：首页中的轮播图和详情中的轮播图，分歧点是宽度是100%还是自适应 -->
        <!-- 既然两个地方其它方面都是没有冲突的，只是宽度有问题，那么我们可以定义一个属性，让使用轮播图的调用者手动指定是否为100%的宽度 -->

    </div>
</template>

<script>
export default{
    data(){
        return {

        }
    },
    props:['lunbotuList','isFull']
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
      text-align: center;
    img {
    //   width: 100%;
      height: 100%;

    }
  }
}
.full{
    width: 100%;
}
</style>

