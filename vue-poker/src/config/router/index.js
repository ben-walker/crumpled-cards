import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { authCheck } from './guards'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(authCheck)

export default router
