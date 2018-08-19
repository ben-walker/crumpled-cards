import { NavigationGuard } from 'vue-router'
import { state } from '../../vuex/modules/user'

const checkAuth: NavigationGuard = (to, from, next) => {
  const authRequired: boolean = to.matched.some(route => route.meta.auth)
  const authenticated: boolean = state.authenticated
  if (authRequired && !authenticated) next('/welcome')
  else if (!authRequired && authenticated) next('/')
  else next()
}

export default checkAuth
