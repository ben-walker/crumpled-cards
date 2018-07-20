import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default [
  { path: '/', name: 'home' },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '*', redirect: { name: 'home' } }
]
