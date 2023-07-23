<script setup>
import { ref, watch, reactive } from 'vue'
import { useMouseInElement } from '@vueuse/core'

defineProps({
    imageList: {
        type: Array,
        default: () => []
    }
})

const leftAndTop = reactive({
    left: 0,
    top: 0
})

const positionxXY = reactive({
    x: 0,
    y: 0
})

const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)


const activeIndex = ref(0)

const handleMouseEnter = (i) => {
    activeIndex.value = i
}

watch([elementX, elementY], () => {

    if (isOutside.value) {
        return
    }

    if (elementX.value > 100 && elementX.value < 300) {
        leftAndTop.left = elementX.value - 100
    }

    if (elementY.value > 100 && elementY.value < 300) {
        leftAndTop.top = elementY.value - 100
    }

    if (elementX.value > 300) {
        leftAndTop.left = 200
    }

    if (elementX.value < 100) {
        leftAndTop.left = 0
    }

    if (elementY.value > 300) {
        leftAndTop.top = 200
    }

    if (elementY.value < 100) {
        leftAndTop.top = 0
    }

    positionxXY.x = -leftAndTop.left * 2
    positionxXY.y = -leftAndTop.top * 2

})
</script>


<template>
    <div class="goods-image">
        <!-- 左侧大图-->
        <div class="middle" ref="target">
            <img :src="imageList[activeIndex]" />
            <!-- 蒙层小滑块 -->
            <div v-show="!isOutside" class="layer" :style="{ left: `${leftAndTop.left}px`, top: `${leftAndTop.top}px` }">
            </div>
        </div>
        <!-- 小图列表 -->
        <ul class="small">
            <li v-for="(img, i) in  imageList " :key="i" @mouseenter="handleMouseEnter(i)"
                :class="{ active: activeIndex === i }">
                <img :src="img" alt="" />
            </li>
        </ul>
        <!-- 放大镜大图 -->
        <div class="large" :style="[
            {
                backgroundImage: `url(${imageList[activeIndex]})`,
                backgroundPositionX: `${positionxXY.x}px`,
                backgroundPositionY: `${positionxXY.y}px`,
            },
        ]
            " v-show="!isOutside">
        </div>
    </div>
</template>

<style scoped lang="scss">
.goods-image {
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;

    .middle {
        width: 400px;
        height: 400px;
        background: #f5f5f5;
    }

    .large {
        position: absolute;
        top: 0;
        left: 412px;
        width: 400px;
        height: 400px;
        z-index: 500;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-repeat: no-repeat;
        // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
        background-size: 800px 800px;
        background-color: #f8f8f8;
    }

    .layer {
        width: 200px;
        height: 200px;
        background: rgba(0, 0, 0, 0.2);
        // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
        left: 0;
        top: 0;
        position: absolute;
    }

    .small {
        width: 80px;

        li {
            width: 68px;
            height: 68px;
            margin-left: 12px;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover,
            &.active {
                border: 2px solid $xtxColor;
            }
        }
    }
}
</style>