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
 },(e) => {return Promise.reject(e)})


export default request