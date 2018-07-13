import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/', name: 'home' },
  { path: '/login', name: 'login' },
  { path: '/signup', name: 'signup' },
  { path: '*', redirect: { name: 'home' } }
]

export default new Router({
  mode: 'history',
  routes
})
