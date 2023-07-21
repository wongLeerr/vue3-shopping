import request from "../http";

// 获取首页轮播图列表
export const getBannerListAPI = () => {

    return request({
        url: '/home/banner',
        method:'get'
    })

} 

// 获取新鲜好物数据
export const getNewGoodsAPI = () => {

    return request({
        url: '/home/new',
        method:'get'
    })

} 

// 获取人气推荐数据
export const getHotAPI = () => {

    return request({
        url: 'home/hot',
        method: 'get',
    })

}


