import { ref , onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import { getCategoryListAPI } from '@/apis/modules/category'


export const useCategory = () => {

    onBeforeRouteUpdate((to) => {
        getCategoryList(to.params.id)
    })
    const route = useRoute()

    const categoryInfo = ref({})

    const getCategoryList = async (id = route.params.id) => {
        const res = await getCategoryListAPI(id)
        categoryInfo.value = res?.result
    }

    onMounted(() => {
        getCategoryList()
    })


    return {
        categoryInfo
    }

}