import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

// 懒加载插件
export const lazyPlugin = {
    // install 方法已注入参数 app
    install(app) {
        // 自定义全局指令
    app.directive('img-lazy', {
        // 可以书写各个钩子函数，以表示指令绑定 DOM 元素的时间状态
        mounted(el, binding) {
            // el: 绑定的真实 DOM
            // binding: binding.value属性表示xxx ( v-img-lazy="xxx" ) 
            console.log(el)
            console.log(binding)

            // 是否进入视口区域
            const targetIsVisible = ref(false)

            // 第一个元素即为监听的元素
            useIntersectionObserver(el, ([{ isIntersecting }]) => {
            
                // 这里即为实时进行执行的区域
                targetIsVisible.value = isIntersecting
                
                // 进入了视口区域
                if (targetIsVisible.value) {
                    // 发请求获取图片数据 (给img元素赋予地址，则自动获取图片资源)
                    el.src = binding.value
                }
            },)

            
        }
    })
        }
}