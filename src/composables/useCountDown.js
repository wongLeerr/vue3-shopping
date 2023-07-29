// 倒计时hook
import { ref,computed,onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
    
    let timer = null
    const time = ref(0)

    const formatTime = computed(() =>{
        if (time.value > 0) {
          return  (dayjs.unix(time.value).format('mm分ss秒'))
        } else {
            return `0 秒`
        }
    })

    // s为传过来的秒数
    const start = (s) => {

        time.value = s
        timer = setInterval(() => {
            time.value--
            if(time.value <= 1) clearInterval(timer)
        },1000)
    }

    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    
    return {
        formatTime,
        start
    }
}