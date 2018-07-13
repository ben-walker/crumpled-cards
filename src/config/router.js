import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '/login' },
  { path: '/signup' }
]

export default new Router({
  mode: 'history',
  routes
})
