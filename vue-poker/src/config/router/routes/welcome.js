const Welcome = () => import(/* webpackChunkName: "public" */ '@/views/Welcome.vue')

export default {
  path: '/welcome',
  name: 'welcome',
  component: Welcome
}
