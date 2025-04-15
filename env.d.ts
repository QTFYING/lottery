/// <reference types="vite/client" />
// 声明文件*.vue文件，交给vue模块处理
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
