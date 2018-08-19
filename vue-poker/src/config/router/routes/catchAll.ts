import { RouteConfig } from 'vue-router'

const catchAll: RouteConfig = {
  path: '*',
  name: 'catchAll',
  redirect: '/'
}

export default catchAll
