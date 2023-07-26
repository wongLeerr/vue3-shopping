import { defineStore  } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/modules/user'
import { useCartStore } from './cart'

export const useUserStore = defineStore('user', () => {

    const cartStore = useCartStore()

    const userInfo = ref({})
    
    const getUserInfo = async (params) => {
        const res = await loginAPI(params)
        userInfo.value = res.result

        // 将本地购物车与远程仓库购物车进行合并
        cartStore.mergeCartList()
    }

    const clearUserInfo = () => {
        
        // 清空用户信息
        userInfo.value = {}

        // 清空本地购物车信息
        cartStore.clearLocalStorageCartList()

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