const Authenticate = () => import(/* webpackChunkName: "auth" */ '@/views/Authenticate.vue')
const Login = () => import(/* webpackChunkName: "auth" */ '@/components/Login.vue')
const Signup = () => import(/* webpackChunkName: "auth" */ '@/components/Signup.vue')

export const login = {
  path: 'login',
  name: 'login',
  component: Login
}

export const signup = {
  path: 'signup',
  name: 'signup',
  component: Signup
}

const redirect = {
  path: '',
  redirect: '/authenticate/login'
}

export default {
  path: '/authenticate',
  component: Authenticate,
  children: [
    login,
    signup,
    redirect
  ]
}
