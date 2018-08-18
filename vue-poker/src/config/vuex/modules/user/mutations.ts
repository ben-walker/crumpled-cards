import { MutationTree } from 'vuex'
import { UserState } from './types'

export const AUTHENTICATE: string = 'AUTHENTICATE'
export const REVOKE_AUTH: string = 'REVOKE_AUTH'
export const START_LOADING: string = 'START_LOADING'
export const STOP_LOADING: string = 'STOP_LOADING'

export const mutations: MutationTree<UserState> = {
  [AUTHENTICATE](state) {
    state.authenticated = true
  },
  [REVOKE_AUTH](state) {
    state.authenticated = false
  },
  startLoading(state) {
    state.loading = true
  },
  stopLoading(state) {
    state.loading = false
  }
}
