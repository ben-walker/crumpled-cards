import initialState from './state'

export const RESET = 'RESET'
export const AUTHENTICATE = 'AUTHENTICATE'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export default {
  [AUTHENTICATE] (state) {
    state.authenticated = true
  },

  [RESET] (state) {
    const initial = initialState()
    Object.keys(initial).forEach(key => { state[key] = initial[key] })
  },

  [START_LOADING] (state) {
    state.loading = true
  },

  [STOP_LOADING] (state) {
    state.loading = false
  }
}
