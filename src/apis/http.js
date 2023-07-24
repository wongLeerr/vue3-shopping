import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const request = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

request.interceptors.request.use((config) => {
    
    const userStore = useUserStore()
    const token = userStore.userInfo.token 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
    
},(e) => {return Promise.reject(e)})

request.interceptors.response.use((res) => {
    // ...
    return res.data
}, (e) => {
    ElMessage.error(`${e.response.data.message}`)

    const userStore = useUserStore()

    // 单独处理401错误
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.replace('/login')
    }


    return Promise.reject('响应拦截器捕获，服务器响应错误', e)
})


export default request