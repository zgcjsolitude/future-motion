import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'

export default [
  // 忽略文件
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
    ],
  },

  // javascript 规则
  eslint.configs.recommended,
  {
    rules: {
      "no-undef": 'off', // 允许未定义的变量
      'no-unused-vars': 'off',
      'no-useless-escape': 'off',
      'no-self-assign': 'off',
      'no-empty': 'off',
    }
  },

  // 配置全局变量
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        "module": true,
        "Component": true,
        "ComponentPublicInstance": true,
        "ComputedRef": true,
        "EffectScope": true,
        "ExtractDefaultPropTypes": true,
        "ExtractPropTypes": true,
        "ExtractPublicPropTypes": true,
        "InjectionKey": true,
        "PropType": true,
        "Ref": true,
        "VNode": true,
        "WritableComputedRef": true,
        "computed": true,
        "createApp": true,
        "customRef": true,
        "defineAsyncComponent": true,
        "defineComponent": true,
        "effectScope": true,
        "getCurrentInstance": true,
        "getCurrentScope": true,
        "h": true,
        "inject": true,
        "isProxy": true,
        "isReactive": true,
        "isReadonly": true,
        "isRef": true,
        "markRaw": true,
        "nextTick": true,
        "onActivated": true,
        "onBeforeMount": true,
        "onBeforeUnmount": true,
        "onBeforeUpdate": true,
        "onDeactivated": true,
        "onErrorCaptured": true,
        "onMounted": true,
        "onRenderTracked": true,
        "onRenderTriggered": true,
        "onScopeDispose": true,
        "onServerPrefetch": true,
        "onUnmounted": true,
        "onUpdated": true,
        "provide": true,
        "reactive": true,
        "readonly": true,
        "ref": true,
        "resolveComponent": true,
        "shallowReactive": true,
        "shallowReadonly": true,
        "shallowRef": true,
        "toRaw": true,
        "toRef": true,
        "toRefs": true,
        "toValue": true,
        "triggerRef": true,
        "unref": true,
        "useAttrs": true,
        "useCssModule": true,
        "useCssVars": true,
        "useSlots": true,
        "watch": true,
        "watchEffect": true,
        "watchPostEffect": true,
        "watchSyncEffect": true,
        "useRouter": true,
        "useI18n": true,
        "useMessage": true,
      },
    },
  },
  // 配置全局变量 - Ts 类型
  {
    languageOptions: {
      globals: {
        "LocaleType": true
      },
    },
  },

  // typescript 规则
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off', 
      '@typescript-eslint/ban-ts-comment': 'off', 
    },
  },

  // vue 规则
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser, // typescript项目需要用到这个
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true, // 允许在.vue 文件中使用 JSX
        },
      },
    },
    rules: {
      'vue/attributes-order': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/html-self-closing': 'off',
      // 'vue/html-self-closing': [
      //   'error',
      //   {
      //     html: {
      //       void: 'always',
      //       normal: 'never',
      //       component: 'always'
      //     },
      //     svg: 'always',
      //     math: 'always'
      //   }
      // ],
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': ['error'], // 禁止v-html，使用 v-dompurify-html 代替
      'vue/singleline-html-element-content-newline': 'off',
    },
  }
];