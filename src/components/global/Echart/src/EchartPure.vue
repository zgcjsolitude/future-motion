<template>
  <div ref="echartRef" class="global-echart-pure"></div>
</template>

<script lang="ts" setup>
import { onMounted, watch, ref, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

defineOptions({
  name: 'GlobalEchartPure'
})

const props = defineProps({
  theme: {
    type: String,
    default: 'default'
  },
  options: {
    type: Object,
    default: () => ({})
  },
  events: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits(['chartRegister'])

const echartRef = ref()
let chartBox: echarts.ECharts | null = null
function initChart() {
  chartBox = echarts.init(echartRef.value, props.theme)
  emits('chartRegister', chartBox)
  // 注册事件
  Object.keys(props.events).forEach((key) => {
    chartBox!.on(key, (params) => {
      props.events[key](params, chartBox)
    })
  })
  // 载入配置
  resetOption()
}
function resetOption() {
  chartBox &&
    chartBox.setOption(props.options, {
      notMerge: true
    })
}
function resizeChart() {
  if (echartRef.value && chartBox) {
    const chartWidth = echartRef.value.clientWidth
    const chartHeight = echartRef.value.clientHeight
    chartBox.resize({
      width: chartWidth,
      height: chartHeight,
      animation: {
        duration: 500
      }
    })
  }
}
function debounceFun(fn: Fn, delay: number = 200) {
  if(typeof fn !== 'function') {
    throw new TypeError('fn不是函数')
  }

  let timer: any = null
  return function(this: any, ...args: any) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(fn.bind(this, ...args), delay)
  }
}
const debounceResizeChart = debounceFun(resizeChart)

watch(
  () => props.options,
  () => {
    resetOption()
  },
  { deep: true }
)

const ro = new ResizeObserver(_entries => debounceResizeChart())

onMounted(() => {
  initChart()
  ro.observe(echartRef.value)
})

onBeforeUnmount(() => {
  ro.disconnect()
  chartBox?.clear()
})
</script>

<style lang="scss">
.global-echart-pure {
  width: 100%;
  height: 100%;
}
</style>
