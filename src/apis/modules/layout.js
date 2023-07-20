import request from "../http";

// 获取一级分类列表
export const getCategoryListAPI = () => {
    return request({
        url: '/home/category/head',
        method:'get'
    })
}

