// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import Croppa from 'vue-croppa'

import App from './App'
import router from './router'
import 'buefy/lib/buefy.css'
import 'vue-croppa/dist/vue-croppa.css'

Vue.use(Buefy)
Vue.use(Croppa)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
