<template>
  <ElDropdown
    v-wave
    class="w-full h-full flex items-center cursor-pointer pl-10px pr-10px"
    trigger="click"
    @command="setLang"
  >
    <div class="h-full flex items-center">
      <GlobalIcon :class="$attrs.class" :size="18" icon="ion:language-sharp" class="mr-4px" style="vertical-align: -3px" />
      <span>{{ currentLang.name }}</span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="item in langMap"
          :key="item.lang"
          :command="item.lang"
        >
          <span :class="[currentLang.lang === item.lang && 'color-[var(--el-color-primary)]']">{{ item.name }}</span>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script lang="ts" setup>
import { useLocaleStore } from '@/store/modules/locale'

const localeStore = useLocaleStore()

const langMap = computed(() => localeStore.getLocaleMap)
const currentLang = computed(() => localeStore.getCurrentLocale)

function setLang(lang: LocaleType) {
  if (lang === unref(currentLang).lang) return
  localeStore.setCurrentLocale(lang)
}
</script>
