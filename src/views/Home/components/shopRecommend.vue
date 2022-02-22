<template>
    <div class="shopRecommend">
        <h2>商品推荐</h2>
        <div class="shop-banner">
            <div class="shop-banner-left" @click="$router.push('/DetailPage')">
                <img src="../../../assets/home/shop01.jpg" alt="">
            </div>
            <div class="shop-banner-right">
                <div class="shop-banner-right-s"><img src="../../../assets/home/shop02.jpg" alt=""></div>
                <div class="shop-banner-right-x"><img src="../../../assets/home/shop03.jpg" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .shopRecommend{
        margin: 0 20px;
        h2{
            font-size: 16px;
        }
    }
    .shop-banner{
        display: flex;
        margin: 10px 0;
        .shop-banner-left{
            width: 40%;
            margin-right: 10px;
            height: 180px;
            border-radius: 8px;
            box-sizing: border-box;
            img{width: 100%; height: 100%;border-radius: 8px;}
        }
        .shop-banner-right{
            width: 60%;
            box-sizing: border-box;
            .shop-banner-right-s{
                height: 86px;
                margin-bottom: 8px;
                border-radius: 8px;
                img{width: 100%;height: 100%;border-radius: 8px;}
            }
            .shop-banner-right-x{
                height: 86px;
                border-radius: 8px;
                img{width: 100%;height: 100%;border-radius: 8px;}
            }
        }
    }
</style>