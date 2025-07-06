import path from 'path'
import { defineConfig } from 'vite'
import progress from 'vite-plugin-progress'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
import UnoCSS from 'unocss/vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import EslintPlugin from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// 当前执行node命令时文件夹的地址(工作目录)
// const root = process.cwd()

export default defineConfig({
  base: '/',
  server: {
    port: 5175,
    open: true, // 自动打开浏览器
    // 本地跨域代理
    proxy: {
      ['/admin-api']: {
        target: '127.0.0.1',
        ws: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^/admin-api`), ''),
      },
    },
  },
  plugins: [
    progress(),
    vue(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/
      ],
      imports: [
        'vue',
        'vue-router',
        // 可额外添加需要 autoImport 的组件
        {
          '@/hooks/useI18n': ['useI18n'],
          '@/hooks/useIcon': ['useIcon'],
          '@/hooks/useMessage': ['useMessage'],
        }
      ],
      resolvers: [ElementPlusResolver({ importStyle: false })],
      dts: 'src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      dirs: ['src/components'],
      directoryAsNamespace: true, // 组件命名空间
      collapseSamePrefixes: true, // 折叠相同前缀命名空间
      dts: 'src/types/auto-components.d.ts',
      resolvers: [ElementPlusResolver({ importStyle: false })]
    }),
    // ElementPlus({}),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: true
    }),
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b
      algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: false //压缩后是否删除源文件
    }),
    ViteEjsPlugin(),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'src/locales/**')]
    }),
    EslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: { api:'modern-compiler' }
    }
  },
  // 项目使用的vite插件。 单独提取到build/vite/plugin中管理
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  build: {
    rollupOptions: {
      // 外部引入，不打包
      external: [
        // "vue"
      ]
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'axios',
      'pinia',
      'qs',
      'sass',
      'unocss',
      'vue-router',
      'vue-i18n',
      'lodash-es',
      'nprogress',
      'web-storage-cache',
      '@vueuse/core',
      'echarts',
      'element-plus',
      'element-plus/es',
      'element-plus/es/locale/lang/zh-cn',
      'element-plus/es/locale/lang/en',
    ],
    exclude: [
      '@iconify/json'
    ]
  }
})
