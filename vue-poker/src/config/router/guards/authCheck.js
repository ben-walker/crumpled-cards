import store from '@/config/vuex'

export default (to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth)
  const authenticated = store.state.user.authenticated

  if (authRequired && !authenticated) next('/welcome')
  else if (!authRequired && authenticated) next('/')
  else next()
}
