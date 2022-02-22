<template>
  <div class="shopTab">
    <div class="shopTab-left">
      <div class="service">
        <div><svg-icon data_iconName="service"></svg-icon></div>
        <div>客服</div>
      </div>
      <div class="shopPing">
        <div><svg-icon data_iconName="news"></svg-icon></div>
        <div>购物车</div>
      </div>
      <div class="collection">
        <div><svg-icon data_iconName="news"></svg-icon></div>
        <div>收藏</div>
      </div>
    </div>
    <div class="shopTab-right">
      <div class="join"><p>加入购物车</p></div>
      <div class="purchase" is-link @click="show = true">
        <p>立即购买</p>
      </div>
      <!-- 弹窗 -->
      <van-action-sheet v-model:show="show" title="标题">
        <div class="content">
          <Popup />
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import {ref, reactive } from '@vue/composition-api'
import Popup from '../../../components/popup.vue'
export default {
  name:'ShopTab',
  components:{
    Popup
  },
  setup(){
    const show = ref(false);
    return{
      show
    }
  }
}
</script>

<style lang="scss" scoped>
  .shopTab{
    height: 56px;
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-image: linear-gradient(
        180deg,#d9d9d9, #d9d9d9 50%, transparent 0
    );
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-color: #fafafa;
    display: flex;
    text-align: center;
    align-items: center;
    .shopTab-left{
      display: flex;
      width: 40%;
      .service{flex: 1;}
      .shopPing{flex: 1;}
      .collection{flex: 1;}
    }
    .shopTab-right{
      display: flex;
      width: 60%;
      text-align: center;
      margin: 0 10px;
      background-image: linear-gradient(to right, #fdd819 , #e80505);
      border-radius: 20px;
      color: white;
      .join{
        flex: 1;
        padding: 10px 0;
        p{
          border-right: 1px solid white;
        }
      }
      .purchase{
        flex: 1;
        padding: 10px 0;
      }
    }
  }
  /* 弹窗 */
  .content {
    padding: 16px 16px 260px;
  }
</style>