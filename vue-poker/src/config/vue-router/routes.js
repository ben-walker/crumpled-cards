import Welcome from '@/views/Welcome.vue'
import Authenticate from '@/views/Authenticate.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default [
  { path: '/' },
  { path: '/welcome', component: Welcome },
  { path: '/authenticate',
    component: Authenticate,
    children: [
      { path: 'login', component: Login },
      { path: 'signup', component: Signup },
      { path: '', redirect: '/authenticate/login' }
    ]
  },
  { path: '*', redirect: '/' }
]
