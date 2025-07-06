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
          title: 'route.home',
        }
      },
      {
        path: 'product',
        component: () => import('@/views/product/index.vue'),
        name: 'ProductIndex',
        meta: {
          title: 'route.product',
        }
      },
      {
        path: 'productview/:id',
        component: () => import('@/views/product/detail.vue'),
        name: 'ProductViewIndex',
        meta: {
          title: 'route.productview',
        }
      },
      {
        path: 'contact',
        component: () => import('@/views/contact/index.vue'),
        name: 'ContactIndex',
        meta: {
          title: 'route.contact',
        }
      },
      {
        path: 'support',
        component: () => import('@/views/support/index.vue'),
        name: 'SupportIndex',
        meta: {
          title: 'route.support',
        }
      },
      {
        path: 'about',
        component: () => import('@/views/about/index.vue'),
        name: 'AboutIndex',
        meta: {
          title: 'route.about',
        }
      },
    ]
  },
  { path: '/404', component: () => import('@/views/404.vue') },
  { path: '/test', component: () => import('@/views/test.vue'), },
  { path: '/:path(.*)*', redirect: '/404' }, 
]
