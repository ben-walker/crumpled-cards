import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'home' },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '*', redirect: { name: 'home' } }
]

export default new Router({
  mode: 'history',
  routes
})
