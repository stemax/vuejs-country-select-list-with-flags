import Vue from 'vue'
import App from './App'
import 'vue-cool-select/dist/themes/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
