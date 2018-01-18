// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueI18n from 'vue-i18n'
import 'vue-material-design-icons/styles.css'
import VueScrollTo from 'vue-scrollto'

import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
