import { getRtnavs } from '../lib/util'
const getters = {
  navactive: (state) => {
    let navactivename = 'adminIndex'
    state.tabs.some((p) => {
      if (p.active === 'active') {
        navactivename = p.routename
        return true
      }
    })
    return navactivename
  },
  getnavs: (state) => {
    //  初始去cookies去读取navs 如果没有就使用navs的默认值
    let navs = getRtnavs()
    if (navs) {
      state.tabs = JSON.parse(getRtnavs())
    }
    return state.tabs
  }
}

export default getters
