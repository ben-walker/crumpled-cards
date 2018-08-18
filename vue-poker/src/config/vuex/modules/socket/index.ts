import { Module } from 'vuex'
import { SocketState } from './types'
import { RootState } from '../../types'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const state: SocketState = {
  connected: false
}

const namespaced: boolean = true

export const socket: Module<SocketState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
