<template>
  <div class="index">
      <router-view />
      <tabBar :data="tabBarData" />
  </div> 
</template>

<script>
import { reactive } from '@vue/composition-api'
import TabBar from './components/tabBar.vue'
export default {
    name:"Index",
    components:{
        TabBar
    },
    setup () {
        const tabBarData = reactive([
            { title: '首页', icon: 'home', path: '/home' },
            { title: '分类', icon: 'home', path: '/sort' },
            { title: '商城', icon: 'home', path: '/shop' },
            { title: '个人中心', icon: 'me', path: '/user' }
        ])
        return { 
            tabBarData
        }
    }
}
</script>

<style lang="scss" scoped>
    .index{
        width: 100%;
        height: calc(100% - 45px);
    }
</style>