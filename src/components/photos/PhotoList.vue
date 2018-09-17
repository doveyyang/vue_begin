<template>
    <div>

        <!-- 顶部滑动条区 -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id ==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

                <!-- 图片列表区域 -->
                <ul class='photo-list'>
                    <router-link  v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag='li'>
                        <img v-lazy="item.img_url">
                        <div class="info">
                            <h1 class="info-title">{{item.title}}</h1>
                            <div class="info-body">{{item.zhaiyao}}</div>
                        </div>
                    </router-link>
                </ul>
			</div>


    </div>
</template>

<script>

    //导入MUI的js文件
    import mui from '../../lib/mui/js/mui.min.js'
    export default{
        data(){
            return {
                cates:[{
                    title:'全部',
                    id:0
                },{
                    title:'分类一',
                    id:10
                },{
                    title:'分类二',
                    id:1
                },{
                    title:'分类三',
                    id:2
                },{
                    title:'分类四',
                    id:3
                },{
                    title:'分类五',
                    id:4
                },{
                    title:'分类六',
                    id:5
                }],//所有分类的列表数组
                list:[],//图片列表地址
            }
        },
        created() {
            this.getAllCategory()
            this.getPhotoListByCateId(0)//默认进入页面就主动请求所有图片列表的数据

        },
        mounted() {
            //当组件中的dom结构被渲染好并放到页面中后，会执行这个 钩子函数
            //如果要操作DOM元素了，最好在mount里面，进行操作

            //初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getAllCategory(){
                //获取所有的图片分类
                // this.$http.get('api/getimgcategory').then(result=>{
                //     if(result.body.status ===0){
                //         result.body.message.unshift({
                //             title:'全部',
                //             id:0
                //         })
                //         this.cates = result.body.message
                //     }else{
                //         Toast('不能获取分类列表')
                //     }
                // })
            },
            getPhotoListByCateId(cateId){
                 console.log('ID:'+cateId)

                 this.list = [{
                     id:50,
                     title:'有气质且可爱的美女组图',
                     img_url:'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                     zhaiyao:'有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图'
                 },
                 {
                     id:51,
                     title:'有气质且可爱的美女组图一',
                     img_url:'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                     zhaiyao:'有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图'
                 },
                 {
                     id:52,
                     title:'有气质且可爱的美女组图二',
                     img_url:'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                     zhaiyao:'有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图'
                 },
                 {
                     id:53,
                     title:'有气质且可爱的美女组图三',
                     img_url:'http://c.hiphotos.baidu.com/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg',
                     zhaiyao:'有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图有气质且可爱的美女组图'
                 }]

                // //根据分类ID获取图片列表
                // this.$http.get('api/getimages/'+cateId).then(result=>{
                   
                //     if(result.body.status ===0 ){
                //         this.list = result.body.message
                //     }
                // })
            }
        }

    }
</script>

<style lang="scss" scoped>
        *{
            touch-action: pan-y; //
        }

       
        .photo-list{
            list-style: none;
            margin: 0;
            padding: 10px;
            padding-bottom: 0;

            li{
                background-color: #ccc;
                text-align: center;
                margin-bottom:10px;
                box-shadow: 0 0 9px  #999;
                position: relative;

                img{
                    width: 100%;
                    vertical-align: middle;

                }

                 img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;                
                }
                .info{
                    color:white;
                    text-align: left;
                    position: absolute;
                    bottom:2px;
                    background-color: rgba(0,0,0,.4);

                    max-height: 84px;
                    .info-title{
                        font-size: 14px;
                    }
                    .info-body{
                        font-size: 13px;
                    }
                }
            }
        }
</style>

