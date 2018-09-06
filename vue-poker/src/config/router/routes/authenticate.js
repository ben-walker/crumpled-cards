const Authenticate = () => import(/* webpackChunkName: "public" */ '@/views/Authenticate.vue')
const Login = () => import(/* webpackChunkName: "public" */ '@/components/Login')
const Signup = () => import(/* webpackChunkName: "public" */ '@/components/Signup')

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
