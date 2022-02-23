<template>
  <div class="shop">
    <div class="shop-head">
        <van-nav-bar class="payOeder-head" title="购物车"/>
    </div>
    <div style="height:46px"></div>
    <!-- 购物车商品内容 -->
    <div class="shopPing">
      <div class="business">
        <div class="business-z">
          <van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>
          <div class="business-svg"><svg-icon data_iconName="news"></svg-icon></div>
          <div class="shop-sl">共<p>2</p>件商品</div>
        </div>
        <div class="administration"><p>管理</p></div>
      </div>
      <!-- 商品 -->
      <div class="shop-content">
        <div class="shop-checked">
          <van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>
        </div>
        <div class="shop-img"><img src="" alt=""></div>
        <div class="shop-text">
          <p>商品名称</p>
          <div class="shop-price">
            <div class="shop-price-left"><p>￥<span>10.00</span></p></div>
            <div class="shop-price-right">
              <van-stepper v-model="shopValue" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <GuessLike />
    <div style="height:300px;"></div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import GuessLike from './components/guessLike.vue'
export default {
  name:'ShopPing',
  components:{
    GuessLike
  },
  setup() {
    const checked = ref(true);
    const shopValue = ref(1)
    return { 
      checked,shopValue
    };
  },
}
</script>

<style lang="scss" scoped>
  .shop-head{width: 100%;position: fixed; top: 0;left: 0;}
  .shopPing{
    margin: 10px 16px;
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    .business{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .business-z{display: flex;align-items: center;}
      .business-svg{display: flex;align-items: center;margin-left: 10px;}
      .shop-sl{display: flex;align-items: center;margin-left: 4px;}
      .administration{margin: 0;}
    }
  }
  .shop-content{
    display: flex;
    align-items: center;
    margin: 16px 0;
    .shop-checked{width: 8%;}
    .shop-img{
      height: 72px;
      width: 26%;
      box-sizing: border-box;
      overflow: hidden;
      margin: 0 10px;
      border-radius: 4px;
      img{width: 100%;height: 100%;}
    }
    .shop-text{width: 66%;}
    .shop-price{
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 22px;
      justify-content: space-between;
      .shop-price-left{color: red;}
      .shop-price-right{text-align: right;}
    }
  }
</style>