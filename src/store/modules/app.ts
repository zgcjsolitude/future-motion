import { defineStore } from 'pinia'
import { store } from '../index'

interface AppState {
  title: string
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      // 系统信息
      title: import.meta.env.VITE_APP_TITLE, // 标题
    }
  },
  actions: {
    setTitle(title: string) {
      this.title = title
    },
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
