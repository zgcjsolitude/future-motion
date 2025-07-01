import * as echarts from 'echarts'
import chinaMap from './json/china.json'

// 注册地图
echarts.registerMap('china', chinaMap as any);
