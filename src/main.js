// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSwal from 'vue-swal'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import appdetails from '@/assets/appdetails'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.filter('toLowercase', function (value) {
  return value.toLowerCase()
})
sync(store, router)
Vue.use(VueSwal)
Vue.use(VueGoogleMaps, {
  load: {
    key: appdetails.googleApiKey,
    libraries: 'places'
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
