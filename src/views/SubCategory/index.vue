<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/modules/category.js'
import GoodItem from '@/views/Home/components/GoodItem.vue'

const loading = ref(true)

const route = useRoute()

const goodsList = ref([])
const disabled = ref(false)
const activeName = ref('publishTime')
const filterData = ref({})
const pagenationInfo = reactive({
    page: 1,
    pageSize: 20,
})

const getCategoryFilter = async () => {
    const res = await getCategoryFilterAPI(route?.params?.id)
    filterData.value = res.result
}

const getSubCategory = async () => {
    const data = {
        categoryId: filterData.value.id,
        ...pagenationInfo,
        sortField: activeName.value
    }
    const res = await getSubCategoryAPI(data)
    goodsList.value = res.result.items
    loading.value = false
}

const handleTabChange = () => {
    pagenationInfo.page = 1
    getSubCategory()
}

const load = async () => {
    pagenationInfo.page += 1
    const data = {
        categoryId: filterData.value.id,
        ...pagenationInfo,
        sortField: activeName.value
    }
    const res = await getSubCategoryAPI(data)
    goodsList.value = [...goodsList.value, ...res.result.items]
    if (!res.result.items || res.result.items.length === 0) {
        disabled.value = true
    }
}

onMounted(() => {
    getCategoryFilter()
    getSubCategory()
})


</script>

<template>
    <el-backtop :right="40" :bottom="80" :visibility-height="300" />
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="activeName" @tab-change="handleTabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled" v-loading="loading">
                <!-- 商品列表-->
                <GoodItem v-for="goods in goodsList" :goods="goods" :key="goods.id" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

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

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>