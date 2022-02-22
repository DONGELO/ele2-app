<template>
  <div class="payOeder">
      <div>
        <van-nav-bar class="payOeder-head" title="待付款订单" left-arrow @click-left="onClickLeft"/>
      </div>
      <div style="height:46px"></div>
      <!-- 收获地址 -->
      <div class="address-receiving">
          <div class="address-icon">
              <svg-icon data_iconName="position"></svg-icon>
          </div>
          <div class="address-text">
              <p>董<span style="margin-left: 6px;">19994648045</span></p>
              <span>贵州省贵阳市观山湖区58号阳光小区</span>
          </div>
          <div class="address-right">
              <svg-icon data_iconName="enter"></svg-icon>
          </div>
      </div>
      <!-- 商品内容 -->
      <div class="shop-content">
          <div class="business">
              <div>
                  <svg-icon data_iconName="position"></svg-icon>
              </div>
              <div style="font-size:14px;">商家</div>
          </div>
          <div class="shop-shopping">
              <div class="shop-img">
                  <img src="" alt="">
              </div>
              <div class="shop-name">
                  <p>爱玲商品大家思考撒旦</p>
                  <div class="shop-pice">
                      <div style="font-size:16px;color:red;">￥139.00</div>
                      <div>x1</div>
                  </div>
              </div>
          </div>
          <!-- 配送方式 -->
            <div class="send">
                <div style="font-size:14px;">配送方式</div>
                <div class="send-wl" is-link @click="show = true">
                    物流配送
                    <svg-icon data_iconName="enter"></svg-icon>
                </div>
                <!-- 配送方式弹窗 -->
                <van-action-sheet v-model:show="show" title="配送方式">
                    <div class="send-pop">内容</div>
                </van-action-sheet>
            </div>
            <!-- 买家留言 -->
            <div class="remarks">
                <div class="remarks-btn">备注</div>
				<div>
                    <input class="desc" style="text-align: right" type="text" v-model="desc" placeholder="请填写备注信息" placeholder-class="placeholder" />
                </div>
            </div>
            <!-- 共计 -->
            <div class="common">
                <p>共<span>1</span>件 小计:<span style="font-size:16px;color:red;">￥19.00</span></p>
            </div>
      </div>
      <!-- 平台优惠劵 -->
      <div class="discount">
        <div style="font-size:14px;">优惠劵</div>
        <div class="discount-wl" is-link @click="discountShow = true">
            已使用优惠卷
            <p>优惠<span>￥50.00</span></p>
        </div>
        <!-- 配送方式弹窗 -->
        <van-action-sheet v-model:show="discountShow" title="优惠劵">
            <div class="discount-pop">内容</div>
        </van-action-sheet>
    </div>
    <div style="height:300px"></div>
    <!-- 提交订单 -->
    <div class="Submit">
        <div></div>
        <div class="Submit-text">
            <p style="margin-right:10px;">共<span>1</span>件</p>
            <p style="margin-right:10px;">合计：<span style="color: red;font-size:14px;">￥139.00</span></p>
            <div class="Submit-order">
                <van-button
                 is-link  
                 @click="orderPopup = true"
                 style="height: 32px;border-radius: 20px;"
                 class="Submit-order" color="linear-gradient(to right, #ff6034, #ee0a24)">
                    提交订单
                </van-button>
                <!-- 提交订单弹窗 -->
                <van-action-sheet v-model:show="orderPopup" title="支付方式">
                    <div class="orderPop">
                        <div>￥<span>8.90</span></div>
                        <div class="orderTab">
                            <van-button
                            is-link  
                            @click="orderPopup = true"
                            style="height: 32px;border-radius: 20px;width:100%;box-sizing: border-box;"
                            color="linear-gradient(to right, #ff6034, #ee0a24)">
                                提交订单
                            </van-button>
                            <div class="agreement">同意并支持此协议</div>
                        </div>
                    </div>
                </van-action-sheet>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
    name:'PayOrder',
    setup() {
        const desc = ref('')
        const value = ref('');
        const show = ref(false);
        const discountShow = ref(false);
        const orderPopup = ref(false)
        const onClickLeft = () => history.back();
        return {
            desc,show,value,discountShow,orderPopup,
            onClickLeft,
        };
    },
}
</script>

<style lang="scss" scoped>
    .payOeder-head{
        width: 100%;
        height: 46px;
        box-sizing: border-box;
        overflow: hidden;
        position: fixed;
        top: 0;
    }
    .address-receiving{
        background-color: white;
        margin: 10px 16px;
        border-radius: 8px;
        padding: 16px 0;
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
        .address-icon{width: 10%; text-align: center;}
        .address-text{ 
            width: 80%;
            overflow: hidden;
            font-size: 18px;
            p{font-size: 14px;}
        }
        .address-right{width: 10%;text-align: center;}
    }
    .shop-content{
        background-color: white;
        margin: 0 16px;
        padding: 16px 10px;
        border-radius: 8px;
        .business{display: flex; align-items: center; }
        .shop-shopping{
            display: flex;
            margin-top: 10px;
            align-items: center;
            padding-bottom: 16px;
            border-bottom: 1px solid #d9d9d9;
            .shop-img{
                width: 26%;
                height: 64px;
                box-sizing: border-box;
                border-radius: 4px;
                margin-right: 20px;
                img{width: 100%;height: 100%;}
            }
            .shop-name{
                width: 74%;
                .shop-pice{
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
        .send{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            .send-wl{ display: flex; align-items: center;}
            .send-pop{padding: 16px 16px 260px;}
        }
        .remarks{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .remarks-btn{margin-right: 10px;font-size: 14px;}
            input{ border: none;}
        }
        .common{text-align: right;margin-top: 20px;}
    }
    .discount{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        margin: 10px 16px;
        border-radius: 8px;
        padding: 10px;
        .discount-wl{
            display: flex;
            align-items: center;
            p{
                margin-left: 10px;
                span{margin-left: 4px;color: red;}
            }
        }
        .discount-pop{padding: 16px 16px 260px;}
    }
    /* 提交订单 */
    .Submit{
        background-color: white;
        height: 54px;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999;
        text-align: right;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        .Submit-text{height: 54px; display: flex; align-items: center;}
        .Submit-orde{height: 16px;border-radius: 20px; }
        .orderPop{padding: 16px 0 260px 0;text-align: left;box-sizing: border-box;}
        .orderTab{
            position: fixed;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
            padding: 0 16px;
            .agreement{margin: 6px 0;}
        }
    }
</style>