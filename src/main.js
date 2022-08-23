import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

import 'animate.css';

import './assets/styles/common.css'
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
