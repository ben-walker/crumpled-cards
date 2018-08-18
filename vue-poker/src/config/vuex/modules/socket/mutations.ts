import { MutationTree } from 'vuex'
import { SocketState } from './types'

export const mutations: MutationTree<SocketState> = {
  SOCKET_CONNECT: state => {
    state.connected = true
  }
}
