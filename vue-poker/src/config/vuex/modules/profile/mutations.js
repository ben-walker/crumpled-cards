import initialState from './state'

export const POPULATE = 'POPULATE'
export const RESET = 'RESET'

export default {
  [POPULATE] (state, userData) {
    state.id = userData._id
    state.username = userData.username
    state.email = userData.email
  },

  [RESET] (state) {
    const initial = initialState()
    Object.keys(initial).forEach(key => { state[key] = initial[key] })
  }
}
