import { defineStore } from 'pinia'
import { defaultLocaleLang, defaultLocaleMap, defaultLocaleOpts, setI18nLanguage } from '@/plugins/vueI18n/index'
import { store } from '../index'

interface LocaleDropdownType {
  lang: LocaleType
  name?: string
}

interface LocaleState {
  currentLocale: LocaleDropdownType
  localeMap: LocaleDropdownType[]
}

export const useLocaleStore = defineStore('locales', {
  state: (): LocaleState => {
    return {
      // 当前语言
      currentLocale: {
        lang: defaultLocaleLang,
        name: defaultLocaleMap[defaultLocaleLang],
      },
      // 语言列表
      localeMap: defaultLocaleOpts as LocaleDropdownType[]
    }
  },
  getters: {
    getCurrentLocale(): LocaleDropdownType {
      return this.currentLocale
    },
    getLocaleMap(): LocaleDropdownType[] {
      return this.localeMap
    }
  },
  actions: {
    setCurrentLocale(lang: LocaleType) {
      window.location.reload()
      this.currentLocale.lang = lang
      setI18nLanguage(lang)
    }
  }
})

export const useLocaleStoreWithOut = () => {
  return useLocaleStore(store)
}
