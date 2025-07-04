export const remainingRouter: any[] = [
  { path: '/', redirect: '/home' }, 
  { 
    path: '/', 
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'HomeIndex',
        meta: {
          title: '首页'
        }
      },
      {
        path: 'product',
        component: () => import('@/views/product/index.vue'),
        name: 'ProductIndex',
        meta: {
          title: '产品展示'
        }
      },
      {
        path: 'productview/:id',
        component: () => import('@/views/product/detail.vue'),
        name: 'ProductViewIndex',
        meta: {
          title: '产品详情'
        }
      },
      {
        path: 'contact',
        component: () => import('@/views/contact/index.vue'),
        name: 'ContactIndex',
        meta: {
          title: '联系我们'
        }
      },
      {
        path: 'support',
        component: () => import('@/views/support/index.vue'),
        name: 'SupportIndex',
        meta: {
          title: '支持与服务'
        }
      },
      {
        path: 'about',
        component: () => import('@/views/about/index.vue'),
        name: 'AboutIndex',
        meta: {
          title: '关于我们'
        }
      },
    ]
  },
  { path: '/404', component: () => import('@/views/404.vue') },
  { path: '/test', component: () => import('@/views/test.vue'), },
  { path: '/:path(.*)*', redirect: '/404' }, 
]
