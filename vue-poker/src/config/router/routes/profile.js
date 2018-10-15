const Profile = () => import(/* webpackChunkName: "private" */ '@/views/Profile')

export default {
  path: '/profile',
  name: 'profile',
  component: Profile,
  meta: {
    auth: true
  }
}
