import initialState from './state'

export const POPULATE = 'POPULATE'
export const RESET = 'RESET'
export const UPDATE_PROFILE_PIC = 'UPDATE_PROFILE_PIC'

export default {
  [RESET] (state) {
    const initial = initialState()
    Object.keys(initial).forEach(key => { state[key] = initial[key] })
  },

  [POPULATE] (state, userData) {
    state.id = userData._id
    state.username = userData.username
    state.email = userData.email
    state.picture = userData.profilePicture
  }
}
