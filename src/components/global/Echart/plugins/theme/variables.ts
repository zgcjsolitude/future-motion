export const colorVars: { [key: string]: any } = {
  light: {
    // 基础颜色
    itemColor: '#3ed1bd',
    green: '#67c23a',
    blue: '#0e4cfd',
    orange: '#ff763b',
    yellow: '#ffc480',
    red: '#fc525c',
    purple: '',
    // 配置颜色
    textRegular: '#373d3f', // 常规文字色：legend.text + xAxis.text + yAxis.text……
    lineRegular: '#e5eaf0', // 常规线色：xAxis.line + yAxis.splitLine……
    itemShadowHover: 'rgba(0, 0, 0, 0.5)', // 常规图例hover色：pie.item
    mapAreaColor: '#f9fffe', // 地图区域底色
    mapAreaColorHover: '#ffc480', // 地图区域hover底色
    mapAreaLineColor: '#3ed1bd', // 地图区域边界线色
    mapAreaColorStart: '#bff1e8', // 地区范围最小值颜色
    mapAreaColorEnd: '#3ed1bd', // 地区范围最大值颜色
    mapAreaSoildColor: '#fff', // 图例厚度地图颜色
    mapAreaSoildShadow: 'rgba(0, 0, 0, 0.3)', // 图例厚度浮层阴影
    mapLinesColor: '#ffc480', // 地图飞行线的颜色
    radarSplitAreaColor: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)'], // 雷达图背景分割色
  },
  dark: {
    // 基础颜色
    itemColor: '#3ed1bd',
    green: '#67c23a',
    blue: '#0e4cfd',
    orange: '#ff763b',
    yellow: '#ffc480',
    red: '#fc525c',
    purple: '',
    // 配置颜色
    textRegular: '#3ed1bd', // 常规文字色：legend.text + xAxis.text + yAxis.text……
    lineRegular: '#e5eaf0', // 常规线色：xAxis.line + yAxis.splitLine……
    itemShadowHover: 'rgba(0, 0, 0, 0.5)', // 常规图例hover色：pie.item
    mapAreaColor: '#fcfaff',
    mapAreaColorHover: '#071537',
    mapAreaLineColor: '#6b3dc3',
    mapAreaColorStart: '#e6d9ff',
    mapAreaColorEnd: '#8748ff',
    mapAreaSoildColor: '#eee',
    mapAreaSoildShadow: 'rgba(0, 0, 0, 0.5)',
    mapLinesColor: '#ffc480',
    radarSplitAreaColor: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)'],
  }
}
