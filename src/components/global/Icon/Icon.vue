<template>
  <el-icon class="global-icon" :color="color" :size="size">
    <svg v-if="isLocal" :class="getSvgClass" aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>

    <IconifyIcon v-else :icon="symbolId" />
  </el-icon>
</template>

<script lang="ts" setup>
import { Icon as IconifyIcon } from '@iconify/vue'

defineOptions({
  name: "GlobalIcon",
})

interface Props {
  icon: string // 图标名
  color?: string
  size?: number | string
  svgClass?: string
}
const props = withDefaults(defineProps<Props>(), {
  icon: '',
  color: '',
  size: 16,
  svgClass: ''
})

const isLocal = computed(() => props.icon.startsWith('svg-icon:'))
const symbolId = computed(() => {
  return unref(isLocal) ? `#icon-${props.icon.split('svg-icon:')[1]}` : props.icon
})

const getSvgClass = computed(() => {
  const { svgClass } = props
  return `iconify ${svgClass}`
})
</script>
