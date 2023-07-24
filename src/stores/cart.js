import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    
    const cartList = ref([])

    const addCart = (goodObj) => {

        let findIndex = cartList.value.findIndex((item) => (item.skuId === goodObj.skuId))

        // 购物车中已有此物，则找到那件物品给其商品数量更新
        if (findIndex !== -1) {
            cartList.value[findIndex].count += goodObj.count
            return 
        }

        // 购物车中无此物，则直接新增一条商品
        cartList.value.push(goodObj)
    }

    return {
        cartList,
        addCart
    }


},{persist:true})