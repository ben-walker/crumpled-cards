import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/login', name: 'login' },
  { path: '/signup', name: 'signup' }
]

export default new Router({
  mode: 'history',
  routes
})
