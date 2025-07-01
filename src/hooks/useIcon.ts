import { h } from 'vue'
import type { VNode } from 'vue'
import { GlobalIcon, IconTypes } from '@/components/global/Icon'

export const useIcon = (props: IconTypes): VNode => {
  return h(GlobalIcon, props)
}
