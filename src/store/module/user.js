import { setToken } from '@/lib/util'

const state = {
  userName: '',
  rules: ''
}
const getters = {
  getUserName: (state) => {
    return state.userName
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  },
  SET_RULES (state, rules) {
    state.rules = rules
  }
}
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
  },
  // 登入
  // 退出
  logout () {
    setToken('')
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
  modules: {
    //
  }
}
