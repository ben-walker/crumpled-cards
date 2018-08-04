import Vue from 'vue'

Vue.directive('focus', {
  inserted: function (el) {
    el.tagName === 'INPUT'
      ? el.focus()
      : el.querySelector('input').focus()
  }
})
