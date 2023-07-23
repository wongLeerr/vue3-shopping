import axios from 'axios'

const request = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

request.interceptors.request.use((config) => {
    // ...
    return config
},(e) => {return Promise.reject(e)})

request.interceptors.response.use((res) => {
    // ...
    return res.data
 },(e) => {return Promise.reject('响应拦截器捕获，服务器响应错误',e)})


export default request