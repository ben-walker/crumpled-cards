import store from '@/config/vuex'

export default (to, from, next) => {
  const authRequired = to.mathed.some((route) => route.meta.auth)
  const authenticated = store.state.user.authenticated

  if (authRequired && !authenticated) next('/welcome')
  else if (!authRequired && authenticated) next('/')
  else next()
}
