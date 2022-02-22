<template>
    <div>
        <!-- 搜索商家 -->
        <Header />
        <div>
            <!-- banner -->
            <div class="banner-box">
                <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
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
            <div class="yuanhu" style="border:1px soild red;">
                <img src="../../assets/banner/yuanhu.png" alt="">
            </div>
            <!-- 金刚区 -->
            <van-swipe class="entries" :autoplay="0" indicator-color="white">
                <van-swipe-item> <!-- v-for="(entry,i) in entries" :key="i" -->
                    <div class="foodentry" v-for="(item, index) in entry" :key="index">
                        <div class="img_wrap">
                            <svg-icon style="font-size:18px;" :data_iconName="item.icon"></svg-icon>
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="noticeBar">
            <van-notice-bar
            left-icon="volume-o"
            scrollable
            text="养生保健服务平台正式上线了！"
            />
        </div>
        <!-- 商品推荐 -->
        <ShopRecommend />
        <!-- 拼团专区 -->
        <div class="moreShop">
            <h2>拼团专区</h2>
        </div>
        <div style="height:200px;"></div>
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import Header from './components/header.vue'
import ShopRecommend from './components/shopRecommend.vue'
export default {
    name:'Home',
    components:{
        Header, ShopRecommend
    },
    setup () {
        const entry = reactive([
            {icon:'news',name:'小吃'},
            {icon:'camera',name:'美食'},
            {icon:'news',name:'养生'},
            {icon:'menu',name:'保健'},
            {icon:'position',name:'营养'},
            {icon:'camera',name:'海吃海喝'},
            {icon:'service',name:'保健食品'},
            {icon:'camera',name:'健身'},
            {icon:'news',name:'运动'},
            {icon:'position',name:'全部'}
        ])
        return {
            entry
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner-box{position: relative; top: 0; left: 0;}
    .swipe {
        height: 150px;
        img{width: 100%;height: 100%;}
    }
    .yuanhu{
        width: 100%;
        position: absolute;
        top: 122px;
        img{width: 100%;height: 40px;}
    }
    .entries{
        background-color: #fff;
        height: 47.2vw;
        text-align: center;
        overflow: hidden;
        border-radius: 8px;
        margin-top: 10px;
        .foodentry{
            width: 20%;
            float: left;
            position: relative;
            margin-top: 6.4vw;
            span{ display: block; color: #666;font-size: 0.32rem;}
            .img-warp{
                position: relative;
                display: inline-block;
                width: 12vw;
                height: 12vw;
                svg{font-size: 36px;}
            }
        }
    }
    .noticeBar{margin: 10px 0;}
    .moreShop{
        background-color: aquamarine;
        margin: 10px 20px;
        height: 86px;
        border-radius: 8px;
    }
</style>