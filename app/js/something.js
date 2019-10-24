import Vue from 'vue'
import Something from './something.vue'

console.log('meow')

window.vue = new Vue({
  el: '#app',
  render: h => h(Something)
})
