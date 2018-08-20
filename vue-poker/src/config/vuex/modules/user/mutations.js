export const AUTHENTICATE = 'AUTHENTICATE'
export const REVOKE_AUTH = 'REVOKE_AUTH'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export default {
  [AUTHENTICATE] (state) {
    state.authenticated = true
  },
  [REVOKE_AUTH] (state) {
    state.authenticated = false
  },
  [START_LOADING] (state) {
    state.loading = true
  },
  [STOP_LOADING] (state) {
    state.loading = false
  }
}
