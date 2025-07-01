<template>
  <div class="global-echart" v-loading="loading">
    <el-empty v-show="!loading && noData" :description="' '" />
    <global-echart-pure v-if="!loading && !noData" :theme="theme" :options="options" :events="events" :key="theme" />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import GlobalEchartPure from './src/EchartPure.vue'
import { ChartProps } from './types'
import { useThemeColorVars } from './utils/hooks'
import './plugins/theme/index'
import './plugins/map/index'

defineOptions({
  name: 'GlobalEchart'
})

const props = withDefaults(defineProps<ChartProps>(), {
  loading: false,
  noData: true,
  theme: '',
  options: () => {},
  events: () => {},
})

const { theme } = useThemeColorVars(props.theme)
</script>
