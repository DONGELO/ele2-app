<template>
  <div class="detailPage">
      <div class="detailPage-head">
          <div class="previousStep" @click="$router.push('/home')"><svg-icon data_iconName="previousStep"></svg-icon></div>
          <div class="search-ss">
              <svg-icon data_iconName="search"></svg-icon>
              搜索
          </div>
          <div class="shopPing"><svg-icon data_iconName="news"></svg-icon></div>
          <div class="share">
              <van-cell @click="showShare = true" >
                  <svg-icon data_iconName="news"></svg-icon>
              </van-cell>
              <van-share-sheet
                v-model:show="showShare"
                title="立即分享给好友"
                :options="options"
                />
          </div>
      </div>
     <!--详情页轮播图 -->
    <div class="swipe-warp">
        <van-swipe class="swipe-warp-box" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/banner/banner01.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/banner/banner02.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/banner/banner03.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 价格详情区 -->
    <div class="price-warp">
        <div class="price-pc">
            <div><p>￥<span>9.9</span></p></div>
            <div>
                <svg-icon data_iconName="news"></svg-icon>
            </div>
        </div>
        <div style="font-size:16px;">商品名称</div>
        <div><span>专家详解，兴趣爱好，从事行业，目前的项目经验是多少年</span></div>
        <div class="price-amount">
            <div><p>快递包邮</p></div>
            <div><p>销量<span>19</span>件</p></div>
        </div>
    </div>
    <!-- 优惠区 -->
    <div class="discount">
        <Discount />
    </div>
    <!-- 评价 -->
    <div class="evaluate">
        <div><p>评价</p></div>
        <div><p>暂无评价</p></div>
    </div>
    <div style="height:200px"></div>
    <!-- 底部导航 -->
    <ShopTab />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import ShopTab from './components/shopTab.vue'
import Discount from './components/discount.vue'
export default {
    name:'DetailPage',
    components: { ShopTab, Discount },
    setup() {
    const showShare = ref(false);
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];

    return {
      options,
      showShare,
    };
  },
}
</script>

<style lang="scss" scoped>
    .detailPage{
        margin: 0;
    }
    .detailPage-head{
        width: 100%;
        height: 56px;
        display: flex;
        position: fixed;
        z-index: 999;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .previousStep{width: 10%;}
        .search-ss{
            background-color: #fff;
            width: 70%;
            display: flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 20px;
        }
        .shopPing{width: 10%; text-align: center;}
        .share{width: 10%; text-align: center;}
    }
    .swipe-warp-box{
        height: 220px;
        width: 100%;
        box-sizing: border-box;
        img{ width: 100%; height: 100%;}
    }
    /* 价格详情区 */
    .price-warp{
        background-color: white;
        margin: 10px 16px;
        border-radius: 8px;
        padding: 16px 10px;
        .price-pc{
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{font-size: 14px;color: red;}
            span{font-size: 20px;}
        }
        .price-amount{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
        }
    }
    .discount{
        background-color: white;
        margin: 10px 16px;
        padding: 10px;
        border-radius: 8px;
    }
    .evaluate{
        background-color: white;
        margin: 10px 16px;
        padding: 16px 10px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>