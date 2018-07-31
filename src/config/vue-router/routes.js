import Welcome from '@/views/Welcome.vue'
import Authenticate from '@/views/Authenticate.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

export default [
  { path: '/', component: Welcome },
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
