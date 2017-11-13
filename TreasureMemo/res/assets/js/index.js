import Vue from 'vue'

//import 'quasar-framework/dist/quasar.mat.css'
//import 'quasar-extras/material-icons/material-icons.css'
import 'quasar-extras/animate'
import Quasar, * as All from 'quasar-framework'

import App from '../../App.vue'

Vue.use(Quasar, {
  components: All,
  directives: All
})

new Vue({
  el: '#app',
  //router,
  render: h => h(App)
})
