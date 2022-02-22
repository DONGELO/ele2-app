<template>
  <div>
    <div class="userHeard-icon">
          <div class="zxin">个人中心</div>
          <div class="user-set">
              <svg-icon data_iconName="news"></svg-icon>
              <svg-icon data_iconName="news"></svg-icon>
          </div>
      </div>
    <userHead />
    <!-- 金刚区 -->
    <van-swipe class="entries" :autoplay="0" indicator-color="white">
        <van-swipe-item> <!-- v-for="(entry,i) in entries" :key="i" -->
            <div class="foodentry" v-for="(item, index) in order" :key="index">
                <div class="img_wrap">
                    <svg-icon :data_iconName="item.icon"></svg-icon>
                </div>
                <span>{{item.name}}</span>
            </div>
        </van-swipe-item>
    </van-swipe>
    <!-- 小轮播区 -->
    <van-swipe class="user-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
          <img src="../../assets/banner/banner01.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../../assets/banner/banner02.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 更多功能 -->
    <div class="distribution">
      <h2>分销功能</h2>
      <div class="distribution-text" v-for="(item, index) in distribution" :key="index">
        <div><p>{{item.name}}</p></div>
        <div><svg-icon :data_iconName="item.icon"></svg-icon></div>
      </div>
    </div>
    <!-- 常用功能 -->
    <div class="used">
      <h2>常用功能</h2>
      <van-swipe class="useded" :autoplay="0" indicator-color="white">
          <van-swipe-item> <!-- v-for="(entry,i) in entries" :key="i" -->
              <div class="useded-text" v-for="(item, index) in usedList" :key="index">
                  <div class="img_icon">
                      <svg-icon :data_iconName="item.icon"></svg-icon>
                  </div>
                  <span>{{item.name}}</span>
              </div>
          </van-swipe-item>
      </van-swipe>
    </div>
    <div style="height:45px;"></div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import UserHead from './components/UserHead.vue'
export default {
  name:'User',
  components:{
    UserHead
  },
  setup () {
    const order = reactive([
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的订单'},
      {icon:'news', name:'积分商城'},
      {icon:'news', name:'累计获得'},
      {icon:'news', name:'我的账单日'},
    ])
    const distribution = reactive([
      {name:'我的分销', icon:'enter'},
      {name:'三级分销功能', icon:'enter'}
    ])
    const usedList = reactive([
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
      {icon:'news', name:'我的足迹'},
    ])
    return {
      order, distribution, usedList
    }
  }
}
</script>

<style lang="scss" scoped>
  .userHeard-icon{
        position: fixed;
        width: 100%;
        z-index: 999;
        padding: 10px 20px;
        display: flex;
        background:rgba(255,255,255,0.3);
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .zxin{font-size: 18px;}
        .user-set svg:nth-child(1){margin-right: 10px;}
    }
  .entries{
    background-color: white;
    height: 18vw;
    margin: 0 20px;
    text-align: center;
    overflow: hidden;
    margin-top: 10px;
    border-radius: 8px;
    .foodentry{
        width: 20%;
        float: left;
        position: relative;
        margin-top: 3.6vw;
        span{ display: block; color: #666;font-size: 0.32rem;}
        .img-wrap{
            position: relative;
            display: inline-block;
            width: 12vw;
            height: 12vw;
            svg{font-size: 36px;}
        }
    }
  }
  .user-swipe{
    height: 72px;
    margin: 10px 20px;
    border-radius: 8px;
    img{width: 100%; height: 100%;}
  }
  .distribution{
    background-color: white;
    margin: 0 20px;
    border-radius: 8px;
    padding:  20px 10px;
    h2{font-size: 16px;}
    .distribution-text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ededde;
      padding: 6px 10px;
      margin-top: 10px;
      border-radius: 6px;
    }
  }
  .used{
    background-color: white;
    margin: 10px 20px;
    border-radius: 8px;
    padding:  20px 10px;
    h2{font-size: 16px;}
  }
  .useded{
    background-color: white;
    height: 32vw;
    text-align: center;
    overflow: hidden;
    margin-top: 10px;
    border-radius: 8px;
    .useded-text{
        width: 25%;
        float: left;
        position: relative;
        margin-top: 3.6vw;
        span{ display: block; color: #666;font-size: 0.32rem;}
        .img-icon{
            position: relative;
            display: inline-block;
            width: 12vw;
            height: 12vw;
            svg{font-size: 36px;}
        }
    }
  }
</style>