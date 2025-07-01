import { computed } from 'vue'
import { colorVars } from '../plugins/theme/variables'
import { ChartTheme } from '../types'

export const useThemeColorVars = (theme: ChartTheme | '' = '') => {
  const chartTheme = computed<ChartTheme>(() => theme || 'light')
  const themeColorVars = computed<any>(() => colorVars[chartTheme.value] || colorVars.light)

  return {
    theme: chartTheme,
    colorVars: themeColorVars,
  }
}
