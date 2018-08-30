const Authenticate = () => import(/* webpackChunkName: "visible" */ '@/views/Authenticate.vue')
const Login = () => import(/* webpackChunkName: "visible" */ '@/components/Login')
const Signup = () => import(/* webpackChunkName: "visible" */ '@/components/Signup.vue')

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
