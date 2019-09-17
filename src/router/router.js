// 总路由配置
const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页',
      childtitle: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页',
      childtitle: '首页'
    }
  }
]

export default routes
