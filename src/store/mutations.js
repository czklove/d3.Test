import { setRtnavs } from '@/lib/util'
const mutations = {
// 新添navs
  mark_navs (state, nvaroute) {
    // 判断新添的route是否已经存在route里面
    if (this.state.tabs && nvaroute) {
      let isIn = this.state.tabs.some((p) => {
        return p.name === nvaroute.name
      })
      if (!isIn) {
        this.state.tabs.forEach((p) => {
          p.active = ''
        })
        this.state.tabs.push(nvaroute)
      }
    }
    setRtnavs(JSON.stringify(this.state.tabs)) // 将navs 存进cookies,防止刷新的时候就没了，如果想一直存的，还可以存进localtion
  },
  // 去掉nvas
  remove_navs (state, nvaroute) {
    // 判断新添的route是否已经存在route里面
    if (this.state.tabs && nvaroute) {
      let index = -1
      let isIn = this.state.tabs.some((p, pindex) => {
        if (p.routename === nvaroute) {
          index = pindex
          return true
        }
      })
      if (isIn) {
        console.log(index)
        if (index !== -1) {
          // 判断当前的是否为选中
          let activetab = this.state.tabs[index]
          console.log(activetab)
          if (activetab.active === 'active') {
            // 假如这个为最后一个tabs
            if (index === this.state.tabs.length - 1) {
              this.state.tabs[index - 1].active = 'active'
            } else {
              this.state.tabs[index + 1].active = 'active'
            }
          }
          this.state.tabs.splice(index, 1)
        }
      }
    }
    setRtnavs(JSON.stringify(this.state.tabs))
  },
  // 设置选中 tab_active 的值
  select_navs (state, tabActive) {
    let hasActive = this.state.tabs.some((p) => {
      if (p.routename === tabActive && p.active === 'active') {
        return true
      }
    })
    if (!hasActive) {
      this.state.tabs.forEach((p) => {
        if (p.routename === tabActive) {
          p.active = 'active'
        } else {
          p.active = ''
        }
      })
    }
    setRtnavs(JSON.stringify(this.state.tabs))
  },
  // 设置nextrouter值
  set_nextroute (state, nextroute) {
    this.state.nextroute = nextroute
  },
  set_searchword (state, keyword) {
    this.state.searchword = keyword
  }
}
export default mutations
