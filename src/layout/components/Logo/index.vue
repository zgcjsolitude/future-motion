<template>
  <div class="inline-block">
    <img :src="langLogo[currentLang.lang]" alt="" />
    <img v-if="showLogoText" class="pb-2px pl-10px" :src="langLogoText[currentLang.lang]" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { useLocaleStore } from '@/store/modules/locale'

interface Props {
  showLogoText?: boolean
}
withDefaults(defineProps<Props>(), {
  showLogoText: false,
})

const localeStore = useLocaleStore()
const currentLang = computed(() => localeStore.getCurrentLocale)
const langLogo = {
  'zh-CN': '/imgs/logo.png',
  'en': '/imgs/logo.png',
}
const langLogoText = {
  'zh-CN': '/imgs/logo-text.png',
  'en': '/imgs/logo-text.png',
}
</script>

<style lang="scss" scoped>
</style>
