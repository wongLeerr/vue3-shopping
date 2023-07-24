import { defineStore  } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/modules/user'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    
    const getUserInfo = async (params) => {
        const res = await loginAPI(params)
        userInfo.value = res.result
        console.log("userInfo:",res.result)
    }

    const clearUserInfo = () => {
        userInfo.value = {}
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist: true, 
})