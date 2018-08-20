import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import guards from './guards'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes
})

guards(router)

export default router
