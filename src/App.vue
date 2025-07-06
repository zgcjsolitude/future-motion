<template>
  <el-config-provider :locale="elLocaleMap[currentLocale.lang]">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { elLocaleMap } from '@/plugins/element-plus'
import { useLocaleStore } from '@/store/modules/locale'

const localeStore = useLocaleStore()

const currentLocale = computed(() => localeStore.currentLocale)
</script>

<style lang="scss" scoped>
</style>
