import store from '@/config/vuex'

export default async (to, from, next) => {
  await store.dispatch('user/authCheck')
  const authRequired = to.matched.some((route) => route.meta.auth)
  const authenticated = store.getters['user/authenticated']

  if (authRequired && !authenticated) next({ name: 'welcome' })
  else if (!authRequired && authenticated) next({ name: 'home' })
  else next()
}
