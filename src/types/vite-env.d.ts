/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string
  readonly VITE_APP_TITLE: string
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
