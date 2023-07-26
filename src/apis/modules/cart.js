import request from "../http";

// 商品加入购物车
export const addCartAPI = (params) => {
    return request({
        url: '/member/cart',
        method: 'post',
        data: {
            ...params
        }
    })
}  

// 获取购物车列表
export const getCartListAPI = () => {
    return request({
        url: '/member/cart',
        method: 'get',
    })
} 

// 修改-购物车商品
export const editCartListAPI = (id,params) => {
    return request({
        url: `/member/cart/${id}`,
        method: 'put',
        data: {
            ...params
        }
    })
}

// 修改-购物车全选/取消
export const selectAllOrCancel = (params) => {
    return request({
        url: `/member/cart/selected`,
        method: 'put',
        data: {
            ...params
        }
    })
}

// 删除-购物车商品
export const delCartListAPI = (params) => {
    return request({
        url: `/member/cart`,
        method: 'delete',
        data: {
            ...params
        }
    })
} 

export const mergeCartListAPI = (data) => {
    return request({
        url: `/member/cart/merge`,
        method: 'post',
        data
    })
}


