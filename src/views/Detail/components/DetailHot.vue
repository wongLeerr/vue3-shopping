<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchHotGoodsAPI } from '@/apis/modules/detail'
import HotItem from './HotItem.vue'

const props = defineProps({
    type: {
        type: Number,
        default: 1
    }
})

const { params: { id } } = useRoute()

const hotList = ref([])

const title = computed(() => {
    return props.type === 1 ? '24小时热榜' : '周热榜'
})

onMounted(async () => {
    const res = await fetchHotGoodsAPI({ id, type: props.type, limit: 6 })
    hotList.value = res.result
})

</script>

<template>
    <div class="goods-hot">
        <h3>{{ title }}</h3>
        <!-- 商品区块 -->
        <HotItem v-for="item in hotList" :good="item" :key="item.id" />
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>