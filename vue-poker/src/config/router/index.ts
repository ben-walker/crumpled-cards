import Vue from 'vue'
import Router, { RouterMode } from 'vue-router'
import routes from './routes'
import { checkAuth } from './guards'

Vue.use(Router)

const mode: RouterMode = 'history'

// TODO: lazy load route components (check ts scaffold vue project)
const router = new Router({
  mode,
  linkActiveClass: 'is-active',
  routes
})

router.beforeEach(checkAuth)

export default router
