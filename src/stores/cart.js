import { defineStore } from 'pinia'
import { ref , computed } from 'vue'

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

    const delCart = (skuId) => {
        cartList.value = cartList.value.filter(item => item.skuId !== skuId)
        console.log("删除后的cartList为:",cartList)
    }

    const totalCount = computed(() => cartList.value.reduce((accumulator,curItem) => (accumulator + curItem.count),0))
    
    const totalMoney = computed(() => cartList.value.reduce((accumulator, curItem) => (accumulator + curItem.count * curItem.price), 0))
    
    // 切换单选框状态
    const singleSelectChange = (skuId, state) => {
        const findItem = cartList.value.find(item => item.skuId === skuId)
        findItem.selected = state
    }
    
    // 切换多选框状态
    const multipleSelectChange = (state) => {
        cartList.value.forEach((item) => {
            item.selected = state
        })
    }

    // 计算全选状态是否被勾选
    const isAllSelected = computed(() => cartList.value.every((item) => item.selected))

    // 打勾的几个项目
    const selectedCartList = computed(() => cartList.value.filter(item => item.selected))
    
    // 打勾的几个项目总共要花多少钱
    const selectedGoodMoney = computed(() =>(selectedCartList.value.reduce((accumulator, curItem) => (accumulator + curItem.count * curItem.price),0)))
    
    return {
        cartList,
        addCart,
        delCart,
        totalCount,
        totalMoney,
        singleSelectChange,
        multipleSelectChange,
        isAllSelected,
        selectedCartList,
        selectedGoodMoney
    }


},{persist:true})