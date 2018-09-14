<template>
    <div class="comment-container">
        <h3>发表评论</h3>

        <hr>
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type='primary' size='large'>发表评论</mt-button>
            <div class="cmt-list">
                <div class="cmt-item" v-for='(item,i) in comments' :key='item.add_time'>
                    <div class="cmt-title">
                        第{{i+1}}楼 &nbsp;&nbsp; 用户：{{item.user_name}}&nbsp;&nbsp; 发表时间：{{item.add_time | dateFormat}}
                    </div>
                    <div class="cmt-body">
                        {{item.content ==='undefined'?'此人很懒，并没有说什么':item.content}}
                        <!-- 锄禾日当午，汗滴禾下土！！！ -->
                    </div>
                </div>
                    
            </div>

        <mt-button type='danger' size='large' plain @click="getMore">加载更多</mt-button>

    </div>
</template>
<script>
import{Toast} from 'mint-ui'
    export default{
        data(){
            return {
                pageIndex:1 ,//默认展示第一页的数据
                comments:[
                    {
                        user_name:'匿名用户',
                        add_time:'2015-04-19T20:09:30.000Z',
                        content:'我来评论一下啦！'
                    },
                     {
                        user_name:'匿名用户',
                        add_time:'2015-04-19T20:09:31.000Z',
                        content:'我来评论一下啦！'
                    }, {
                        user_name:'匿名用户',
                        add_time:'2015-04-19T20:09:32.000Z',
                        content:'我来评论一下啦！'
                    }, {
                        user_name:'匿名用户',
                        add_time:'2015-04-19T20:09:33.000Z',
                        content:'我来评论一下啦！'
                    }, {
                        user_name:'匿名用户',
                        add_time:'2015-04-19T20:09:34.000Z',
                        content:'我来评论一下啦！'
                    }, {
                        user_name:'匿名用户',
                        add_time:'2015-04-19T20:09:35.000Z',
                        content:'我来评论一下啦！'
                    }
                    
                ],//所有的评论数据
            }
        },
        created() {
          this.getpinglun()  
        },
        methods:{
            getpinglun(){
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex)
                .then(result =>{
                    if(result.body.status ===0){

                        // this.comments = result.body.message
                        this.comments = this.comments.concat(result.body.message) //每当获取新评论的数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
                    }else{
                        Toast('获取评论失败！')
                    }

                })
            },
            getMore(){
                this.pageIndex ++
                this.getpinglun()
            }

        }
    }
</script>


<style lang="scss" scoped>
.comment-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    font-size: 12px;
    .cmt-item {
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }

      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
