<template>
  <div class="header">
        <div class="search-warp">
            <div class="position-box">
                <svg-icon data_iconName="position"></svg-icon>
                <span>贵阳市</span>
                <svg-icon data_iconName="down" style="font-size:10px"></svg-icon>
            </div>
            <div class="shop-search" @click="$router.push('/')">
                <svg-icon data_iconName="search"></svg-icon>
                请输入商品名称
                <svg-icon class="camera" data_iconName="camera"></svg-icon>
            </div>
            <div class="icon-news">
                <svg-icon data_iconName="news"></svg-icon>
            </div>
            <div class="icon-service">
                <svg-icon data_iconName="service"></svg-icon>
            </div>
        </div>
        <!-- 横向滚动条 -->
  </div>
</template> 

<script>
import BScroll from '@better-scroll/core'
export default {
    name:"Header",
    data(){
        return{
        }
    },
    mounted() {
    },
    beforeDestroy() {

    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        background:rgba(255,255,255,0.3);
        z-index: 999;
        width: 100%;
        .search-warp{
            width: 100%;
            padding: 10px 0;
            display: flex;
            align-items: center;
            .position-box{
                width: 26%;
                margin-left: 20px;
                display: flex;
                align-items: center;
                svg{
                    font-size: 12px;
                    color: rgba(7, 7, 7, 0.933); 
                }
                svg:nth-child(1){
                    font-size: 12px;
                    color: rgb(0, 0, 0);
                }
                span{
                    font-size: 14px;
                    color: rgba(7, 7, 7, 0.933);
                    display: inline-block;
                    width: 46%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .shop-search{
                width: 54%;
                background:rgba(255,255,255,0.8);
                padding: 6px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                position: relative;
                .camera{
                    position: absolute;
                    right: 10px;
                }
            }
            .icon-news,.icon-service{
                width: 10%;
                text-align: center;
                svg{
                    color: rgba(0, 0, 0, 0.933);
                }
            }
        }
        .navgation{
             .scroll-wrapper{
                 position: relative;
                 white-space: nowrap;
                 overflow: hidden; 
                 margin: auto;
                 .scroll-content{
                     display: inline-block;
                     ul{
                         display: flex;
                         margin: 10px auto;
                         padding: 0 20px;
                         li{
                             list-style: none;
                             font-size: 16px;
                             margin-right: 20px;
                         }
                     }
                 }
             }
        }
    }
</style>