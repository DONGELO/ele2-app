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
        </div>
        <div class="business-svg"><svg-icon data_iconName="news"></svg-icon></div>
        <div class="shop-sl">共<p>2</p>件商品</div>
        <div class="administration"><p>管理</p></div>
      </div>
    </div>
    <div style="height:200px;"></div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name:'ShopPing',
  setup() {
    const checked = ref(true);
    return { checked };
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
      .business-z{margin: 0;}
      .business-svg{margin: 0;}
      .shop-sl{display: flex;align-items: center;}
      .administration{margin: 0;}
    }
  }
</style>