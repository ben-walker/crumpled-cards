import Welcome from '@/views/Welcome.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Reset from '@/views/Reset.vue'

export default [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/reset', component: Reset },
  { path: '*', redirect: '/' }
]
