const Profile = () => import(/* webpackChunkName: "private" */ '@/views/Profile.vue')

export default {
  path: '/profile',
  name: 'profile',
  component: Profile
}
