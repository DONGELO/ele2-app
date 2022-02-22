<template>
  <div class="userHead">
      <!-- 个人资料，头像 -->
      <div class="user-data">
          <div class="head-img">
              <img src="../../../assets/logo.png" alt="">
          </div>
          <div class="user-text">
              <h4>名称</h4>
              <p>账号名称：<span>0000000</span></p>
          </div>
          <div class="Sign"><p>签到</p></div>
      </div>
      <!-- 收藏，关注，零钱等 -->
      <div class="head-middle">
          <div>
              <svg-icon data_iconName="news"></svg-icon>
              <p>收藏</p>
          </div>
          <div>
              <svg-icon data_iconName="news"></svg-icon>
              <p>关注</p>
          </div>
          <div>
              <svg-icon data_iconName="news"></svg-icon>
              <p>积分</p>
          </div>
          <div>
              <svg-icon data_iconName="news"></svg-icon>
              <p>零钱</p>
          </div>
      </div>
      <!-- 会员功能 -->
      <div class="member-box">
          <div class="member">
            <div class="member-grade">
                <div class="grade01"><svg-icon data_iconName="news"></svg-icon></div>
                <div class="grade02">会员等级</div>
                <div class="grade03"><svg-icon data_iconName="enter"></svg-icon></div>
            </div>
            <div class="member-benefit">
                <div class="benefit01"><svg-icon data_iconName="news"></svg-icon></div>
                <div class="benefit02">会员权益</div>
                <div class="benefit03"><svg-icon data_iconName="enter"></svg-icon></div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'UserHead',
}
</script>

<style lang="scss" scoped>
    .userHead{
        width: 100%;
        height: 230px;
        /* background: url('../../../assets/banner/banner02.jpg'); */
        background-image: linear-gradient(#e66465 , #9198e5);
        position: relative;
        top: 0;
    }
    .user-data{
        display: flex;
        align-items: center;
        margin: 0 20px;
        padding-top: 50px;
        position: sticky;
        box-sizing: border-box;
        .head-img{
            width: 20%;
            position: sticky;
            box-sizing: border-box;
            img{width: 64px; height: 64px; border-radius: 64px;}
        }
        .user-text{
            width: 60%;
            h4{margin-bottom: 6px;font-size: 16px; }
        }
        .Sign{width: 20%;text-align: center;}
    }
    .head-middle{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    .member-box{
        width: 100%;
        position: absolute;
        bottom: 0;
        .member{
            margin: 0 20px;
            display: flex;
            justify-content: space-around;
            .member-grade{
                flex: 1;
                display: flex;
                align-items: center;
                background-color: bisque;
                padding: 6px;
                border-radius: 8px 0 0 0;
                .grade01{width: 16%;}
                .grade02{width: 70%;}
                .grade03{width: 14%;text-align: center;}
            }
            .member-benefit{
                flex: 1;
                display: flex;
                align-items: center;
                background-color:#0e0d0d;
                color: white;
                padding: 6px;
                border-radius: 0 8px 0 0;
                .benefit01{width: 16%;}
                .benefit02{width: 70%;}
                .benefit03{width: 14%;text-align: center;}
            }
        }
    }
</style>