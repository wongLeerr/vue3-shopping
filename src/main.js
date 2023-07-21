import { createApp   } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'

import { lazyPlugin } from '@/directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 自定义懒加载插件
app.use(lazyPlugin)

app.mount('#app')

