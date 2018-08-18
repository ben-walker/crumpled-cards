import { Module } from 'vuex'
import { UserState } from './types'
import { RootState } from '../../types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const state: UserState = {
  authenticated: false,
  loading: false
}

const namespaced: boolean = true

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
