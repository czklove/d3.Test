import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes,
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  // 重新设置标题
  to.meta && setTitle(to.meta.title)  
  next()
})
export default router
