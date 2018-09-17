<template>
    <div class='goodsinfo-container'>
        <!-- <h3>商品详情页面</h3> -->
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isFull="false"></swiper>
                </div>
            </div>
        </div>

            <!-- 商品购买区域 -->
            <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<!-- <div class="mui-card-footer">页脚</div> -->
			</div>
            <!-- 商品参数区域 -->
            <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'

    export default{
        data(){
            return {
                id:this.$route.params.id,
                lunbotu:[]
            }
        },
        created() {
          this.getLunbo()  
        },
        methods:{
            getLunbo(){
                // this.$http.get('api/getthumimages/'+id).then(result=>{
                //     //挂载
                //     if(result.body.status ===0){
                //         this.lunbotu = result.body.message
                //     }
                // })
                var d_lunbotu = [
                    {src:'https://img14.360buyimg.com/mobilecms/s140x140_jfs/t5416/113/1664241527/303674/59aafdff/5912e997Na8312ff8.jpg'},
                ]
                //先循环轮播图数组的每一项，为item添加img属性， 因为轮播图组件中，只认识item.img
                d_lunbotu.forEach(item =>{
                    item.image = item.src
                })
                this.lunbotu = d_lunbotu

                

            }
        },components:{
            swiper
        }


    }
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;

}
</style>

