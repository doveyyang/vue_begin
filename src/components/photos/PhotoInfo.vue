<template>
    <div class='photoinfo-container'>
        <h3>{{photoinfo.title}}</h3>

        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>

        <hr>
        <!-- 缩略图 -->
        <!-- <div class='thumbs'> -->
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        <!-- </div> -->
        

        <div class="content" v-html="photoinfo.content">

        </div>
        <cmt-box :id='id'></cmt-box>

    </div>



</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default{
        data(){
            return {
                id:this.$route.params.id, //从路由中获取到的路由ID
                photoinfo:'',
                 list: [ //缩略图列表
                   
                ]
            }
        },
        created() {
            this.getPhotoInfo()
            this.getThumbs()
        },
        methods:{
            handleClose () {
                console.log('close event')
            },
            getPhotoInfo(){
                //获取图片的详情
                // this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                //     if(result.body.status ===0){
                //         this.photoinfo = result.body.message[0]
                //     }
                // })
                this.photoinfo = {
                    add_time:'2015-04-18T04:30:50',
                    click:0,
                    content:'不要简朴不啊哟素雅，洋气卧室我做主，高低床榻榻米靓丽卧室装扮，现代简约 明亮的外表卧室卧室背景墙，吊顶黄色',
                    id:37,
                    title:'现代简约 明亮的外表卧室背景两，吊顶黄色'
                }
            },
            getThumbs(){
                // 
                console.log('ID:'+this.id)
                this.list = [
                     {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 60,
                        h: 40
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 120,
                        h: 90
                    }
                ];
                // this.$http.get('api/getthumimages/'+this.id).then(result=>{
                //     if(result.body.status ===0){
                //         result.body.message.forEach(item => {
                //             item.w = 600
                //             item.h = 400
                //         })
                //         // 循环数据，补全图片的宽和高
                //         // 把完整的数据保存到list中
                //     }
                // })
            }
        },components:{
            "cmt-box":comment
        }
    }

</script>

<style lang="scss" scoped>
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26A2EF;
        font-size: 15px;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 10px;
    }
    .content{
        font-size:12px;
        line-height: 24px;
    }
    .pswp--minimal--dark{
        margin: 10px;
        box-shadow: 0 0 8px #999;
        width: 200px;
    }
}
</style>


// 周诗欣 