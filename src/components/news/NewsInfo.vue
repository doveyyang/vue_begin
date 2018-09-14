<template>
    <div class='newsinfo-container'>
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
            <span> 点击 {{newsinfo.click}} 次</span>
        </p>

        <hr>
        <div class="content" v-html="newsinfo.content">

        </div>

        <comment-box :id='id'></comment-box>
    </div>
</template>

<script>
// import {Toast} from 'mint-ui'
 import comment from '../subcomponents/comment.vue'

export default{
    data(){
        return {
            id:this.$route.params.id, //将URL地址中的ID值，挂载到data中，方便以后调用
            newsinfo:{
                id:13,
                title:'买房还是炒股，2015年买房无法拒绝的5大理由',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布',
                click:1,
                img_url:'https://gitee.com/uploads/36/423336_dengsgo.png',
                content:'<div class="a-con">                            <p><img src="https://t1.huanqiu.cn/02fcfc8eccdd62dcc78f7aaf6c52867d.jpg"/></p><p><p align="center">中国军网记者冯开华拍摄的开山岛风光。</p><p>　　开山岛，位于我国黄海前哨。她外形呈馒头状，海拔36.4米，总面积1.5万平方米。全岛兀踞在海天之间，烟波浩渺之中。登岛远眺，水天一色，海鸥翔集，大有“波浪看如倒，蓬莱望若林”之诗境。</p><p>　　对于外来游客来说，开山岛可以是“神秘岛屿”，但对于日夜守卫在岛上的王继才夫妇来说，开山岛却是名副其实的“海上孤岛”。</p><p>　　开山岛虽为弹丸之地，但因位于灌河口，地形险要，具有重要的战略地位。1986年7月15日早晨8时45分，王继才第一次踏上开山岛。之后的32年，他便与妻子一起成为了开山岛上不灭的灯塔，直到王继才走到生命的最终点。</p><p>　　常言道，无限风光在险峰，但除了地理位置险峻外，或许我们也可以再加上一句，无限美景，远观很丰满，近看很骨感。就如开山岛一样，全岛由黑褐色的岸石组成，怪石嶙峋，陡峭险峻。岛上无树林泥土，亦无淡水资源。这对于以岛为家的王继才夫妇来说，既要忍受寂寞的煎熬，又要承受艰苦的条件。</p><p>　　我国是一个边海防大国，在2.2万余公里的陆地边界线和1.8万余公里的大陆海岸线上，有朔风肆虐的高原、涛声激荡的海岛、黄沙覆盖的戈壁，还有像王继才夫妇一样的一代代戍边人。他们战风霜，斗酷暑，只为让我们看到最美的风景。明月装饰了他们的窗子，他们装饰了我们的梦。</p><p>　　图/中国军网记者冯开华 穆可双 乔宇飞 罗凯 沈奥 周寅 刘晓东 赵向虎 文字、整理/赵阳 图片来源：中国军网</p><p></p></p><p><img src="https://t1.huanqiu.cn/4513b77881d21a4b5d45490d60d4668d.jpg"/></p>                        <div class="a-edit"><span class="a">责编：任鑫恚</span></div>                    </div>                                                            <div class="aa-item mtb30" id="aa_paging_1">                                    </div>'

            }
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id)
            .then(result =>{
                if(result.body.status === 0){
                        //获取成功
                        this.newsinfo = result.body.message[0]
                }else{
                    Toast('获取详情失败')
                }
            })
        }
    },
    components:{
        "comment-box":comment
    }
}
    
</script>

<style lang="scss">
.newsinfo-container{
    padding:0 4px;
    img{
        width: 100%;
    }

    .title{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color:red;
    }
    .content{
        color:grey;
    }
    .subtitle{
        font-size: 13px;
        color:#226eff;
        display: flex;
        justify-content: space-between;
    }
}
</style>

