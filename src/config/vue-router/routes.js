import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default [
  { path: '/' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '*', redirect: '/' }
]
