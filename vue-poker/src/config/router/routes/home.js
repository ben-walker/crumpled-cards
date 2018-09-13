const Home = () => import(/* webpackChunkName: "private" */ '@/views/Home.vue')
const Tables = () => import(/* webpackChunkName: "private" */ '@/views/Tables.vue')

export const tables = {
  path: 'tables',
  name: 'tables',
  component: Tables
}

export const friends = {
  path: 'friends',
  name: 'friends'
}

export default {
  path: '/',
  name: 'home',
  component: Home,
  redirect: { name: 'tables' },
  meta: {
    auth: true
  },
  children: [
    tables,
    friends
  ]
}
