import { RouteConfig } from 'vue-router'

const homeRoute: RouteConfig = {
  path: '/',
  name: 'home',
  meta: {
    auth: true
  }
}

export default homeRoute
