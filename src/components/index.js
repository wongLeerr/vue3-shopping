// 全局注册components文件夹下的组件

import ImageView from './ImageView/index.vue'
import Sku from './Sku/index.vue'

export const componentPlugin = {
    install(app) {
        // 注册组件的格式 app.component('组件名'，配置对象)
        app.use('ImageView', ImageView)
        app.use('Sku',Sku)
    }
}
