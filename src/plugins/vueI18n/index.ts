import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18n, I18nOptions } from 'vue-i18n'
import { CACHE_KEY, useCache } from '@/hooks/useCache'
import { setHtmlPageLang } from './helper'

const { wsCache } = useCache()

export let i18n: ReturnType<typeof createI18n>

// 初始值
export const defaultLocaleLang = wsCache.get(CACHE_KEY.LANG) || 'zh-CN'
export const defaultLocaleMap = {
  'zh-CN': '简体中文',
  'en': 'English',
}
export const defaultLocaleOpts = Object.entries(defaultLocaleMap).map(([key, value]) => {
  return {
    lang: key,
    name: value,
  }
})

// 初始配置
const createI18nOptions = async (): Promise<I18nOptions> => {
  const defaultLocal = await import(`../../locales/${defaultLocaleLang}.ts`)
  const message = defaultLocal.default ?? {}

  setHtmlPageLang(defaultLocaleLang)

  return {
    legacy: false,
    locale: defaultLocaleLang,
    fallbackLocale: defaultLocaleLang,
    messages: {
      [defaultLocaleLang]: message
    },
    availableLocales: defaultLocaleOpts.map((v) => v.lang),
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true
  }
}

// 安装
export const setupI18n = async (app: App<Element>) => {
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}

// 扩展函数 - 设置语言
export const setI18nLanguage = async (locale: LocaleType) => {
  wsCache.set(CACHE_KEY.LANG, locale)
  
  const globalI18n = i18n.global
  const langModule = await import(`../../locales/${locale}.ts`)

  globalI18n.setLocaleMessage(locale, langModule.default)

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as any).value = locale
  }
  setHtmlPageLang(locale)
}
