import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryListAPI } from '../apis/modules/layout'


export const useCategoryStore = defineStore('category', () => { 

    // 一级分类列表
    const categoryList = ref ([])

    // 获取一级分类列表数据
    const getCategoryList = async () => {
        const res = await getCategoryListAPI()
        if (res.code === '1') {
            categoryList.value = res.result
        }
        console.log(categoryList)
    }

    // 将属性和方法交出去
    return {
        categoryList,
        getCategoryList,
    }
})
 