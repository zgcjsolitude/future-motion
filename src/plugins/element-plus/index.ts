import type { App } from 'vue'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 语言配置
export * from './lang'

// 已通过插件配置按需导入
export const setupElementPlus = (_app: App<Element>) => {
  // app.use(ElementPlus)
}
