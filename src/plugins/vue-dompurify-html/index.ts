import type { App } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html' // 解决v-html 的安全隐患

// 已通过插件配置按需导入
export const setupVueDOMPurifyHTML = (_app: App<Element>) => {
  _app.use(VueDOMPurifyHTML)
}
