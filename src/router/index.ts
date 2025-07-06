import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { useNProgress } from '@/hooks/useNProgress'
import { useTitle } from '@/hooks/useTitle'
import { useAppStoreWithOut } from '@/store/modules/app'
import { remainingRouter } from './routes'

const { start, done } = useNProgress()
const appStore = useAppStoreWithOut()
const docTitle = useTitle()

const router = createRouter({
  history: createWebHistory('/'),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: remainingRouter as RouteRecordRaw[],
})

// 路由加载前
router.beforeEach(async (to, from, next) => {
  start()
  next()
})

router.afterEach((to) => {
  if (to?.meta?.title) {
    const { t } = useI18n() // 国际化
    docTitle.value = to?.meta?.title ? `${appStore.title}|${t(to?.meta?.title)}` : appStore.title
  }
  done()
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
