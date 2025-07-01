import { colorVars } from '../variables'

const color = colorVars.dark

export const dark = {
  title: {
    show: false,
  },
  legend: {
    show: false,
    type: 'scroll', // 使用滚动图例
    top: 'bottom', // 在底部
    textStyle: {
      color: color.textRegular,
    },
  },
  grid: {
    top: 10, // 初始预留xAxis.label
    right: 5, // 右侧预留空间适配多数内容溢出情况
    bottom: 5, // 增加底部留白
    left: 5, // 增加左侧留白
    containLabel: true // grid 区域包含坐标轴
  },
  categoryAxis: {
    // 坐标轴轴线
    axisLine: {
      show: true, 
      lineStyle: {
        show: true, 
        type: 'solid',
        width: 1,
        color: color.lineRegular,
      }
    },
    // 坐标分隔线
    splitLine: {
      lineStyle: {
        color: color.lineRegular,
      }
    },
    // 坐标轴刻度设置
    axisTick: {
      show: true,
      alignWithLabel: true, // 保证刻度线和标签对齐
    },
    // 坐标轴刻度标签设置
    axisLabel: {
      fontSize: 12,
      color: color.textRegular,
    },
  },
  valueAxis: {
    minInterval: 1, // 值最小间隔1
    nameTextStyle: {
      color: color.textRegular,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: color.lineRegular,
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      fontSize: 12,
      color: color.textRegular,
    },
    axisLine: {
      show: false,
      lineStyle: {
        width: 2,
        color: color.lineRegular,
      }
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  line: {
    symbolSize: 0,
    smooth: true,
    smoothMonotone: 'x',
    label: {
      color: color.textRegular,
      position: 'top',
    },
  },
  bar: {
    barWidth: 30,
    barGap: '30%',
    label: {
      color: color.textRegular,
    },
    itemStyle: {
      borderRadius: 0,
    }
  },
  pie: {
    radius: '70%',
    center: ['50%', '50%'] ,
    label: {
      color: color.textRegular,
    },
    emphasis: {
      itemStyle: {
        shadowColor: color.itemShadowHover,
        shadowBlur: 10,
        shadowOffsetX: 0,
      }
    }
  },
  radar: {
    symbol: 'none',
    lineStyle: {
      width: 1.5
    },
    label: {
      color: color.textRegular,
    },
    areaStyle: {
      opacity: 0.2
    },
    axisName: {
      color: color.textRegular,
    },
    axisLine: {
      lineStyle: {
        color: color.lineRegular,
      }
    },
    splitLine: {
      lineStyle: {
        color: color.lineRegular,
      }
    },
    splitArea: {
      areaStyle: {
        color: color.radarSplitAreaColor
      }
    }
  },
  geo: {
    label: {
      show: false,
      color: color.textRegular,
    },
    itemStyle: {
      areaColor: color.mapAreaColor,
      borderColor: color.mapAreaLineColor,
    },
    emphasis: {
      label: {
        color: color.textRegular,
      },
      itemStyle: {
        areaColor: color.mapAreaColorHover,
      }
    },
  },
  visualMap: {
    show: false,
    calculable: true,
    inRange: {
      color: [color.mapAreaColorStart, color.mapAreaColorEnd]
    },
    outOfRange: {
      color: [color.mapAreaColor]
    },
    textStyle: {
      color: color.textRegular,
    },
  },
  map: {
    select: {
      disabled: true
    },
    label: {
      show: false,
      fontSize: 10,
      color: color.textRegular,
    },
    itemStyle: {
      areaColor: color.mapAreaColor,
      borderColor: color.mapAreaLineColor,
    },
  },
  lines: {
    symbol: ['none', 'arrow'],
    symbolSize: 12,
    lineStyle: {
      width: 2,
      opacity: 0.6,
      curveness: 0.2, // 线曲度
      color: color.mapLinesColor,
    },
    effect: { // 线特效
      show: true,
      period: 6, // 特效动画的时间，单位为 s
      trailLength: 0, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
      symbolSize: 4
    },
  },
  scatter: {
    label: {
      show: false,
      position: 'right',
      formatter: '{b}',
      color: color.textRegular,
    },
    itemStyle: {
      color: color.mapLinesColor,
    }
  },
  effectScatter: {
    rippleEffect: { // 涟漪特效
      brushType: 'stroke' // 波纹的绘制方式，可选 'stroke' 和 'fill'
    },
    label: {
      show: false,
      position: 'right',
      formatter: '{b}',
      color: color.textRegular,
    },
    itemStyle: {
      color: color.mapLinesColor,
    },
  },
  graphic: {
    text: {
      style: {
        fill: 'red'
      }
    }
  },
  color: ['#3ed1bd', '#0e4cfd', '#67c23a', '#ffc480', '#fc525c'],
}
