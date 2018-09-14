<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key='item.id'>
					<router-link  :to=" '/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>发表时间：{{ item.add_time | dateFormat }}</span>
								<span>点击：{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
    export default{
		data(){
			return {
				newslist:[
					{
						id:13,
						title:'买房还是炒股，2015年买房无法拒绝的5大理由',
						add_time:'2015-04-16T03:50:28.000Z',
						zhaiyao:'房企一季度销售业绩已经陆续公布',
						click:1,
						img_url:'https://gitee.com/uploads/36/423336_dengsgo.png'

					},{
						id:14,
						title:'买房还是炒股，2015年买房无法拒绝的5大理由',
						add_time:'2015-04-16T03:50:28.000Z',
						zhaiyao:'房企一季度销售业绩已经陆续公布',
						click:1,
						img_url:'https://gitee.com/uploads/36/423336_dengsgo.png'
					},{
						id:15,
						title:'买房还是炒股，2015年买房无法拒绝的5大理由',
						add_time:'2015-04-16T03:50:28.000Z',
						zhaiyao:'房企一季度销售业绩已经陆续公布',
						click:1,
						img_url:'https://gitee.com/uploads/36/423336_dengsgo.png'
					},{
						id:16,
						title:'买房还是炒股，2015年买房无法拒绝的5大理由',
						add_time:'2015-04-16T03:50:28.000Z',
						zhaiyao:'房企一季度销售业绩已经陆续公布',
						click:1,
						img_url:'https://gitee.com/uploads/36/423336_dengsgo.png'
					}
				]
			}
		},
		created() {
			this.getNewsList();
		},
		methods:{
			getNewsList(){
				this.$http.get('').then(result=>{
					if(result.body.status ===0){
						//如果没有失败，从data中
						this.newslist = result.body.message;
					}else{
						Toast('获取新闻列表失败')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.mui-table-view {
	h1{
		font-size: 14px;
	}
	.mui-ellipsis{
		font-size: 12px;
		color:#22f;

		display: flex;
		justify-content: space-between
	}
	
}
</style>

