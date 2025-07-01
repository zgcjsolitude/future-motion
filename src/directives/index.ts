import type { App } from 'vue'
import { vWave } from './wave/index'

/**
 * 导出指令：v-xxx
 */
export function setupDirectives(app: App<Element>) {
  // 波纹点击效果
  vWave(app)
}
