import { App } from 'vue'
import { waveAnimate } from './wave'
import './index.css'

export function vWave(app: App) {
  app.directive('wave', waveAnimate)
}
