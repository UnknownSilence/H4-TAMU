import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
//import firebase from 'firebase'

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  components: { App },
  render: h => h(App)
}).$mount('#app')


