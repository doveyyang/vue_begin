<template>
    <div class='shopcar-container'>
        <!-- <h3>ShopcarContainer</h3> -->
        <div class="goods-list">

            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                            <div class="info">
                                <h1>{{item.title}}</h1>
                                <p>
                                    <span class='price'>￥{{item.sell_price}}</span>
                                    <numbox :initcount='$store.getters.getGoodsCount[item.id]' :goodsid='item.id'></numbox>
                                    <!-- 如何从购物车中获取商品的数量 -->
                                    <!-- 1 我们可以先攒关键一个空对象，然后循环购物车中所有的商品的数据，把当前循环这条商品的ID作为对象的属性名，count作为对象的属性还在，这样，当把所有的商品循环一次，就会得到一个对象{88：1，89：2，90：4} -->
                                    <!-- i  是索引 -->
                                    <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                                </p>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总价（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总价￥<span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type='danger'>去结算</mt-button>
                </div>
            </div>
        </div>
        <p></p> 

    </div>
</template>
<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
export default {
  data() {
    return {
      value: false,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取购物车商品列表        获取到store中所有的商品ID，然后拼接出来一个 用逗号分隔的字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));

      if (idArr.length <= 0) {
        return;
      }
      console.log("购物车中的商品ID集合：" + idArr.join(","));
      // this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
      //     if(result.body.status ===0){
      //         this.goodslist = result.body.message
      //     }
      // })
      this.goodslist = [
        {
          cou: 1,
          id: 87,
          title: "华为手机",
          sell_price: 2195,
          thumb_path:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t5416/113/1664241527/303674/59aafdff/5912e997Na8312ff8.jpg"
        }
      ];
    },
    remove(id, index) {
      //点击删除，把商品从store中根据传递的Id进行删除，同时把当前组件中的goodslist中的对应商品用index进行删除
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFromCar", id);
    },
    selectedChanged(id,val){
        //每当点击开关，把最新的快关状态同步到store中
        // debugger
        console.log(id+'--- '+val);
        this.$store.commit('updateGoodsSelected',{id,selected:val})        
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    .mui-card-content-inner {
      display: flex;
      justify-content: center;
    }

    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .price {
        color: red;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    .red {
      color: red;
      font-size: 16px;
    }
  }
}
</style>

