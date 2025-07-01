import 'virtual:svg-icons-register'
import { addIcon, addCollection } from '@iconify/vue'
import epIcons from '@iconify/json/json/ep.json'
import icons from './icons-custom'

// 基于离线环境注册图标库
addCollection(epIcons)

// 自定义icon
icons.forEach(icon => {
  addIcon(icon.name, icon.config)
})
