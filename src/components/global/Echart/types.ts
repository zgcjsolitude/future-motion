// 图表颜色主题：浅色 | 暗色 | 大屏暗色 | ''
export type ChartTheme = 'light' | 'dark' | 'visualDark' | '' 

// 图表组件Props
export interface ChartProps { 
  loading?: boolean
  noData?: boolean
  theme?: ChartTheme
  options?: any
  events?: any
}
