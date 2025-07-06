import { createApp, App } from 'vue'
import mainApp from './App.vue'

// 引入unocss css
import '@/plugins/unocss'

// 导入全局的svg图标
import '@/plugins/svgIcon'

// 引入动画
import '@/plugins/animate.css'

// 引入状态管理
import { setupStore } from '@/store'

// 路由
import router, { setupRouter } from '@/router'

// 引入 element-plus
import { setupElementPlus } from '@/plugins/element-plus'

// 全局组件
import { setupGlobCom } from '@/components'

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'

// 注册自定义指令
import { setupDirectives } from '@/directives/index'

// 防御XSS攻击，使用 v-dompurify-html 代替 v-html
import { setupVueDOMPurifyHTML } from '@/plugins/vue-dompurify-html'

// 全局样式
import './style/index.scss'

let app: App<Element>
async function setupAll() {
  app = createApp(mainApp)

  setupElementPlus(app)

  setupGlobCom(app)

  setupI18n(app)

  setupDirectives(app)

  setupStore(app)

  setupRouter(app)

  await router.isReady()

  setupVueDOMPurifyHTML(app)

  app.mount('#app')
}

setupAll()
