<template>
  <div>
    <!-- 优惠券单元格 -->
    <div class="discount-warp">
        <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
        v-model:show="showList"
        round
        position="bottom"
        style="height: 70%; padding-top: 16px;"
        >
        <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
        />
        </van-popup>
    </div>
    <div class="huodong">
        <div><p>活动</p></div>
    </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
    name:'Discount',
    setup() {
    const coupon = {
      available: 1,
      condition: '无门槛\n最多优惠12元',
      reason: '',
      value: 150,
      name: '优惠券名称',
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: '1.5',
      unitDesc: '元',
    };

    const coupons = ref([coupon]);
    const showList = ref(false);
    const chosenCoupon = ref(-1);

    const onChange = (index) => {
      showList.value = false;
      chosenCoupon.value = index;
    };
    const onExchange = (code) => {
      coupons.value.push(coupon);
    };

    return {
      coupons,
      showList,
      onChange,
      onExchange,
      chosenCoupon,
      disabledCoupons: [coupon],
    };
  },
}
</script>

<style lang="scss" scoped>
    .van-cell{
        line-height: 26px !important;
    }
    .discount-warp{
        padding-bottom: 4px;
        border-bottom: 1px solid #ededed;
    }
    .huodong{
        margin-top: 10px;
    }
</style>