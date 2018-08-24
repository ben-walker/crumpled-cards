const Welcome = () => import(/* webpackChunkName: "visible" */ '@/views/Welcome.vue')

export default {
  path: '/welcome',
  name: 'welcome',
  component: Welcome
}
