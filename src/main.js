import { createApp   } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(router)

// 自定义懒加载插件
app.use(lazyPlugin)
// 全局注册组件
app.use(componentPlugin)

app.mount('#app')

