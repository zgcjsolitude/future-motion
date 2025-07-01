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
    ]
  },
  { path: '/404', component: () => import('@/views/404.vue') },
  { path: '/test', component: () => import('@/views/test.vue'), },
  { path: '/:path(.*)*', redirect: '/404' }, 
]
