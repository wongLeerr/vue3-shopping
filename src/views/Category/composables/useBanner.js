import { getBannerListAPI } from '@/apis/modules/home'
import { ref, onMounted } from 'vue'


export function useBanner() {
    
    const loading = ref(true)
    const bannerList = ref([])

    onMounted(async () => {
        const { result } = await getBannerListAPI({ distributionSite: '2' })
        bannerList.value = result
        loading.value = false
    })

    return {
        bannerList,
        loading
    }
    
}