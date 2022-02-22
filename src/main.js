import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCompositionApi from '@vue/composition-api'
Vue.use(vueCompositionApi)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

//svgIcon
import '@/svgIcon'

//样式
import '@/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
