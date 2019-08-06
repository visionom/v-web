import Vue from 'vue'
import App from './App.vue'

// plugins
import vuetify from './plugins/vuetify';
import router from '@/router'
import store from './store'

Vue.config.productionTip = true
Vue.config.devtools = true
Vue.config.performance = true

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
