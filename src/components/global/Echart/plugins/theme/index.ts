import * as echarts from 'echarts'
import { light } from './src/light'
import { dark } from './src/dark'
import { visualDark } from './src/visualDark'

echarts.registerTheme('light', light)
echarts.registerTheme('dark', dark)
echarts.registerTheme('visualDark', visualDark)
