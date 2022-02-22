<template>
  <div class="popup">
      <div class="popup-head">
        <div class="popup-head-left"><img src="" alt=""></div>
        <div class="popup-head-zj">
            <p class="popup-price">￥19.9<span>卷后￥17.90</span></p>
            <p>库存100件</p>
        </div>
      </div>
      <div class="quantity">
          <div>购买数量</div>
          <div><van-stepper v-model="value" /></div>
      </div>
      <div class="determine">
          <button @click="$router.push('/payOrder')">确定</button>
      </div>
  </div>
</template>

<script>
import {ref, reactive } from '@vue/composition-api'
export default {
    name:'Popup',
    setup(){
        const value = ref(1)
        return{
            value
        }
    }
}
</script>

<style lang="scss" scoped>
    .popup{
        text-align: left;
        margin: 0;
        padding: 0;
    }
    .popup-head{
        display: flex;
        border-bottom: 1px solid #d9d9d9;
        padding-bottom: 20px;
        .popup-head-left{
            width: 72px;
            height: 72px;
            box-sizing: border-box;
            overflow: hidden;
            border-radius: 6px;
            margin-right: 10px;
            img{width: 100%; height: 100%;}
        }
        .popup-head-zj{
            .popup-price{ color: red;}
        }
    }
    .quantity{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }
    .determine{
        position: fixed;
        bottom: 0;
        display: flex;
        text-align: center;
        justify-content: center;
        left: 0;
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
        button{
            width: 100%;
            background-color: red;
            margin: 10px 20px;
            padding: 6px 0;
            border-radius: 20px;
            color: white;
            border: none;
        }
    }
</style>