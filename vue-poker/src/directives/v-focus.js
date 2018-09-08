import Vue from 'vue'

Vue.directive('focus', {
  inserted (el) {
    el.tagName === 'INPUT'
      ? el.focus()
      : el.querySelector('input').focus()
  }
})
