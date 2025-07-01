import { watch, ref } from 'vue'
import { isString } from '@/utils/is'

export const useTitle = (newTitle?: string) => {
  const title = ref(newTitle)

  watch(
    title,
    (n, o) => {
      if (n && isString(n) && n !== o && document) {
        document.title = n
      }
    },
    { immediate: true }
  )

  return title
}
