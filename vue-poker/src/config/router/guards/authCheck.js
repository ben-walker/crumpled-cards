import toAsync from 'await-to-js'
import store from '@/config/vuex'

export default async (to, from, next) => {
  const [ err ] = await toAsync(store.dispatch('user/getMe'))
  const authRequired = to.matched.some((route) => route.meta.auth)
  const authenticated = err === null

  if (authRequired && !authenticated) next('/welcome')
  else if (!authRequired && authenticated) next('/')
  else next()
}
