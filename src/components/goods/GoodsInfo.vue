<template>
    <div class='goodsinfo-container'>
        <!-- <h3>商品详情页面</h3> -->
        <transition 
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter'
        >
            <div class="ball" v-show="ballFlag" ref='ball'></div>
        </transition>
        

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
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价 <del>￥ {{goodsinfo.market_price}}</del>
                            销售价 <span class='now_price'>￥{{goodsinfo.sell_price}}</span>
                        </p>
                        <p>
                            购买数量：<numbox @getcount='getSelectedCount' :max='goodsinfo.stock_quantity'></numbox>
                        </p>
                        <p>
                            <mt-button type='primary' size='normal'>立即购买</mt-button>
                            <mt-button type='danger' size='normal' @click="addToShopCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
            <!-- 商品参数区域 -->
            <div class="mui-card">
				<div class="mui-card-header">商品详情</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsinfo.goods_no}}</p>
						<p>库存情况：{{goodsinfo.stock_quantity}} 件</p>
						<p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type='primary' size='large' @click='goDesc(id)'>图文介绍</mt-button>
                    
                    <mt-button type='danger' size='large' @click="goComment(id)">商品评论</mt-button>
                </div>

                <!-- 如果实现：加入购物车的时候，拿到选择的数量 -->
                <!-- 1 分析发现：按钮属于 goodsInfo页面，数字属于numberbox组件 ， 2 由于涉及到了父子组件的嵌套，所以无法直接在goodsinfo组件中获取到选择框中的值 -->
                <!-- 3 如何解决：涉及到子组件向父组件传值了 -->
                <!-- 4 事件调用的本质，父向子传递方法，子调用这个方法，同时把数据当作参数，传递给这个方法 -->

			</div>
    </div>
</template>
<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: {},
      ballFlag: false, //小球的显示标识符,
    selectedCount:1,//默认用户选中数量值
    };
  },
  created() {
    this.getLunbo();
    this.getGoodsInfo();
  },
  methods: {
    getLunbo() {
      // this.$http.get('api/getthumimages/'+id).then(result=>{
      //     //挂载
      //     if(result.body.status ===0){
      //         this.lunbotu = result.body.message
      //     }
      // })
      var d_lunbotu = [
        {
          src:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t5416/113/1664241527/303674/59aafdff/5912e997Na8312ff8.jpg"
        }
      ];
      //先循环轮播图数组的每一项，为item添加img属性， 因为轮播图组件中，只认识item.img
      d_lunbotu.forEach(item => {
        item.image = item.src;
      });
      this.lunbotu = d_lunbotu;
    },
    getGoodsInfo() {
      // this.$http.get('api/goods/getinfo/'+this.id).then(result){

      // }
      this.goodsinfo = {
        id: 101,
        title: "Shinco/新科 S2300 无线麦克风 无",
        add_time: "2015-04-19T19:34:55.000Z",
        goods_no: "SD3973042344",
        stock_quantity: 20,
        market_price: 269,
        sell_price: 199
      };
    },
    goDesc(id) {
      //编程时导航条，跳转到 图文介绍页面

      this.$router.push({
        name: "goodsdesc",
        params: { id }
      });
    },
    goComment(id) {
      //点击跳转到 评论页面
      this.$router.push({
        name: "goodscomment",
        params: { id }
      });
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

        // 小球动画优化思路
        //1 先分析导致 动画 不准确的 本质原因
        //2 我们小球的最终位置固定到某一位置，一旦分辨率不同，或者滚动条有一定的滚动距离之后，问题就出现了，不能把位移的距离写固定
        //初步分析：得出解题思路，先得到购物车徽标的 横纵坐标，再得到小球的横纵坐标，然后让y值为其y差，x也为其x差，
        //如何得到徽标和小球的位置？ domObject.getBoundingClientRect() DOM中获取坐标
        
        //获取小球在页面中的位置
        const ballPosition = this.$refs.ball.getBoundingClientRect()
        
        //通过DOM获取徽标所在的位置
        const badgePostion = document.getElementById('badge').getBoundingClientRect()
        const xDist = badgePostion.left - ballPosition.left
        const yDist = badgePostion.top - ballPosition.top 



      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(0.4,-0.3,1,0.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count){
        //当子组件把选中的数量传递给父组件的时候，调用毁掉函数
        this.selectedCount = count;
        console.log('父组件拿到的值：'+count)
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    font-size: 12px;
    font-weight: 700;
    color: red;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 390px;
    left: 150px;     
  }
}
</style>

