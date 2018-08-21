const Home = () => import('@/views/Home.vue')

export default {
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    auth: true
  }
}
