import { RouteConfig } from 'vue-router'

// TODO: add Login component after ts conversion
export const login: RouteConfig = {
  path: 'login',
  name: 'login'
}

// TODO: add Signup component after ts conversion
export const signup: RouteConfig = {
  path: 'signup',
  name: 'signup'
}

export const authRedirect: RouteConfig = {
  path: '',
  redirect: '/authenticate/login'
}

// TODO: add Authenticate component after ts conversion
const authenticate: RouteConfig = {
  path: '/authenticate',
  name: 'authenticate',
  children: [
    login,
    signup,
    authRedirect
  ]
}

export default authenticate
